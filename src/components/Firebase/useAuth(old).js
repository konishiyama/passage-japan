import { useEffect, useState } from "react"
import getFirebaseInstance from "./firebase"
import loadFirebaseDependencies from "./loadFirebaseDependencies"

//useAuthでは、ユーザーがログイン・アウトしたとき(onAuthStateChanged())に、当該ユーザーの情報(userResult/getUserProfile)を取得して、ユーザーのpublicProfileのdocumentを持ってきつつ、Stateとしてuserを設定している(この際にusername要素も定義(もってきたpPdocumentのid=document名をusernameとしてステートに設定)している。
function useAuth() {
  const [user, setUser] = useState(null)
  const [firebase, setFirebase] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let unsubscribe
    let publicProfileUnsubscribe

    loadFirebaseDependencies.then(app => {
      const firebaseInstance = getFirebaseInstance(app)
      setFirebase(firebaseInstance)

      unsubscribe = firebaseInstance.auth.onAuthStateChanged(userResult => {
        if (userResult) {
          // userResult.getIdTokenResult(true).then((result) => {
          //     if(result.claims.admin === true){
          //       console.log(result);
          //         setUser({
          //             ...user,
          //             admin: true
          //     });
          //     }else{
          //     }
          // }) 下のsetUserと交錯してしまうのでいったんなし。
          firebaseInstance
            .getUserProfile({
              userId: userResult.uid,
            })
            .then(r => {
              //ここで持ってきているrはuserIdが一致するpublicProfilesの中のdocument
              // console.log(r)
              if (r.size === 0) {
                return {
                  ...user,
                  username: null,
                  photoURL: null,
                }
              }

              const [snap] = r.docs
              const data = snap.data()
              setUser({
                ...userResult,
                username: r.docs[0].id,
                photoURL: data ? data.photoURL : null,
              })
            })
        } else {
          setUser(null)
        }

        setLoading(false)
      })
    })

    return () => {
      if (unsubscribe) {
        unsubscribe()
      }

      if (publicProfileUnsubscribe) {
        publicProfileUnsubscribe()
      }
    }
  }, [])

  return { user, firebase, loading }
}

export default useAuth
