import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../Firebase/firebase init";
import { useState } from "react";


const Login = () => {


    const [user,setUser]=useState(null)
    const googleProvider=new GoogleAuthProvider()
    const githubProvider=new GithubAuthProvider()


    // Log in button google
    const handleGoogleSignIn=()=>{
        console.log(auth,googleProvider);
       signInWithPopup(auth,googleProvider)
       .then((result)=>{
        setUser(result.user);
       })

       .catch(error=>{
        console.log('ERROR',error);
        setUser(null)
       })
    }





       // sign in github

       const handleGithubSignIn=()=>[

        signInWithPopup(auth,githubProvider)
        .then((result)=>{
            console.log(result.user);
            setUser(result,user)

        })
        .catch(error=>{
            console.log('ERROR',error);
        setUser(null)
        })
    ]





    // Sign Out button 
    const handleSignOut=()=>{

        signOut(auth)
        .then(()=>{
            console.log('sign out done');
            setUser(null)
        })

        .catch(error=>console.log(error))

    }



 

    // if user exists?signOut:LogIn
    return (
        <div>
            {/* <button onClick={handleGoogleSignIn}>Login with Google</button>
            <button onClick={handleSignOut}>Sign Out</button> */}


            {
               user ?<button onClick={handleSignOut}>Sign Out</button>
               :
               <>
               <button onClick={handleGoogleSignIn}>Login with Google</button>

               <button onClick={handleGithubSignIn}>Login With Github</button>
               
               </>
            }



            {
            
            user && <div>
                <h4>{user.displayName}</h4>
                <p>Email : {user.email}</p>
               

            </div>
            
            }
        </div>
    );
};

export default Login;