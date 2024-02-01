import React, { useState } from 'react';
import GoogleLogo from './Assets/search.png';
import FacebookLogo from './Assets/facebook.png';
import GithubLogo from './Assets/github.png'; 
import "./App.css"
import { auth, googleProvider, signInWithPopup,fbProvider, githubProvider } from './firebase';

const App = () => {
  const [user, setUser] = useState(null);

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };
  const fbLogin = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };
  const gitLogin = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  console.log(user);

  return (
    <section>
      <div>
        <div className='buttonContainer' onClick={googleLogin}>
          <img src={GoogleLogo} alt='Google' />
          <button>Google</button>
        </div>
        <div className='buttonContainer'onClick={fbLogin}>
          <img src={FacebookLogo} alt='Facebook' />
          <button>Facebook</button>
        </div>
        <div className='buttonContainer'onClick={gitLogin}>
          <img src={GithubLogo} alt='Github' />
          <button>Github</button>
        </div>
      </div>
      <h1>{user?.email}</h1>
      <div>
          <img src={user?.photoURL} alt='' className='profileContainer'/>
        </div>
        <div>
        <h1>{user?.displayName}</h1>
        </div>
    </section>
  );
};

export default App;
