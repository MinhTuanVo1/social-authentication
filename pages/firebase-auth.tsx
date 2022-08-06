import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { app } from '../config/firebaseConfig';

const FireBaseAuth: NextPage = () => {
  const auth = getAuth(app);
  const provider = new FacebookAuthProvider();
  const handleClick = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential?.accessToken;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = FacebookAuthProvider.credentialFromError(error);
    });
  }
  return (
    <div className={styles.container}>
      <button onClick={handleClick}>Login FaceBook</button>
    </div>
  )
}

export default FireBaseAuth
