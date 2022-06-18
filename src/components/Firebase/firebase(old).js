// import { initializeApp } from "firebase/app"
// import firebaseConfig from "./config"
// const app = initializeApp(firebaseConfig)
// const auth = import("firebase/compat/auth")
// const database = import("firebase/compat/firestore")
// const functions = import("firebase/compat/functions")
// const storage = import("firebase/compat/storage")

// app.initializeApp(firebaseConfig)
class Firebase {
  constructor(app) {
    if (!firebaseInstance) {
      this.auth = app.auth()
      this.db = app.firestore()
      this.functions = app.functions()
      this.storage = app.storage()
    }
  }
  // async postArticle1({ title, content, cover, date, articleNum }) {
  //   return await setDoc(doc(this.db, "articles"), {
  //     title: title,
  //     content: content,
  //     thumnail: cover,
  //     date: date,
  //     articleNum: articleNum,
  //   })
  // }

  async postArticle({ title, content, cover, date, articleNum }) {
    return this.db.collection("articles").doc().set({
      title: title,
      content: content,
      thumnail: cover,
      date: date,
      articleNum: articleNum,
    })
  }

  async memberWrite({ title, content, date, username, userPhoto, postNum }) {
    return this.db.collection("memberposts").doc().set({
      title: title,
      content: content,
      date: date,
      username: username,
      userPhoto: userPhoto,
      postNum: postNum,
    })
  }

  async getUserProfile({ userId }) {
    return this.db
      .collection("publicProfiles")
      .where("userId", "==", userId)
      .get()
    //whereの第一引数はField名であってDocument名ではない。このクエリによってDocumentを持ってきている。
  }

  async getArticleNumbers() {
    return this.db.collection("articles").get()
  }

  async getMemberPostNumbers() {
    return this.db.collection("memberposts").get()
  }

  async register({ email, password, username, photoURL }) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    )
    //createWith...はuser.uidという要素をもつオブジェクトをreturnする。他方、このままだと一人のユーザーが紐づくpublicProfileをいくつも作成できてしまうが、その部分はlesson41以降のfirebasecloud functionsnに関する説明で解消する。
    return this.db.collection("publicProfiles").doc(username).set({
      userId: newUser.user.uid,
      Email: newUser.user.email,
      photoURL: photoURL,
    })
  }

  async editProfile({ username, photoURL, userId, email }) {
    return this.db.collection("publicProfiles").doc(username).set({
      photoURL: photoURL,
      userId: userId,
      Email: email,
    })
  }

  async postComment({ text, photoURL, username, memberPostId, time }) {
    return this.db
      .collection("comments")
      .doc()
      .set({
        text: text,
        photoURL: photoURL,
        username: username,
        memberposts: this.db.collection("memberposts").doc(memberPostId),
        timeCreated: time,
      })
  }

  async subscribeToMemberPosts({ onSnapshot }) {
    return this.db.collection("memberposts").onSnapshot(onSnapshot)
  }
  async subscribeToArticles({ onSnapshot }) {
    return this.db.collection("articles").onSnapshot(onSnapshot)
  }

  async subscribeToPostComments({ postId, onSnapshot }) {
    const postRef = this.db.collection("memberposts").doc(postId) //lesson41,42を参照
    return this.db
      .collection("comments")
      .where("memberposts", "==", postRef)
      .onSnapshot(onSnapshot)
  }
  //registerのときと同じように'==', 'articleId'では参照できない（getUserProfileのときはたんにデータを呼び出してくるだけだったが、今回はbookのドキュメントに紐付いているコメントを引っ張ってくる（そもそもコメントはブックに紐付いている））ので、レファレンス形式にする必要あるが、その作り方が上のconst articleRef。

  async login({ email, password }) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  async logout() {
    await this.auth.signOut()
  }
}

let firebaseInstance

function getFirebaseInstance(app) {
  if (!firebaseInstance && app) {
    firebaseInstance = new Firebase(app)
    //https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/new 及びhttps://www.sejuku.net/blog/24383を参照
    return firebaseInstance
  } else if (firebaseInstance) {
    return firebaseInstance
  } else {
    return null
  }
}

export default getFirebaseInstance
