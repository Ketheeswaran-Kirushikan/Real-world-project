import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider,signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAvo8HO-LAH9YWlM7zBIgFEt7OUL3tNamc",
  authDomain: "my-authentication-system.firebaseapp.com",
  projectId: "my-authentication-system",
  storageBucket: "my-authentication-system.appspot.com",
  messagingSenderId: "1026279185573",
  appId: "1:1026279185573:web:07455f49d2e107464a814c"
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider, fbProvider,signInWithPopup };

