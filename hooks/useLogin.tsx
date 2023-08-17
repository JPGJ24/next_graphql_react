import { UsersGmail, UsersFacebook, Users } from "../interfaces/ILogin";
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from "next/router";
export const useLogin =  () => {

const idConectFacebook = "706836997418106"
const idConectGmail = "1096968720685-2te0t3hj08p4a1t5t5e3et0bcruh0h52.apps.googleusercontent.com";
const urlConectUser = "http://localhost:3001/users"

 const [user, setUser] = useState(() => {
  if(typeof window !== "undefined") {
    if(localStorage.getItem("Users")) {
      return JSON.parse(localStorage.getItem("Users")|| '{}')
    } else{
    return []
    }
 }
      // const initialValue = JSON.parse(localStorage.getItem("Users") || '{}');
      // return  initialValue  || {username:'', password:''} as unknown as Users 
    
    });

 const [userGmail, setUserGmail] = useState({} as UsersGmail)
   
 const [userFacebook, setUserFacebook] = useState(() => {
  if(typeof window !== "undefined") {
    if(localStorage.getItem("UserFacebook")) {
      return JSON.parse(localStorage.getItem("UserFacebook")|| '{}')
    } else{
    return []
    }
 }
      // const Value = JSON.parse(localStorage.getItem("UserFacebook") || '{}');
      // return  Value  || {} as UsersFacebook 
    });

  //  useEffect(() => { 
  //       localStorage.setItem("Users",JSON.stringify(user))
  //       localStorage.setItem("UserFacebook",JSON.stringify(userFacebook))
  //       });


        // useEffect(() => {
        //   const gapi = import("gapi-script").then((pack) => pack.gapi);
        //   const initClient = async () => {
        //     const d = await gapi;
        //     d.client.init({
        //       clientId: idConectGmail as string,
        //       scope: "https://www.googleapis.com/auth/gmail.send",
             
        //     });
        //   };
        //   gapi.then((d) => d.load("client:auth2", initClient));
        // }, []);

        
      


 const loginFacebook = (response:UsersFacebook) => {
      if(response.status !== "unknown"){
        setUserFacebook(response);}}
 const signOutFacebook =  () =>{
        localStorage.removeItem("UserFacebook");
        window.location.reload()
       }

 const loginGoogle = (response:any) => {
        // router.push("/")
        const userObjet = response.profileObj
        setUserGmail(userObjet || {});}
 const signOutGoogle = () => {
          window.location.reload()}

 const loginUser = (e:any) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value
        })}
 const signOutUser = () => {
        localStorage.removeItem("Users");
        window.location.reload()
      }

 const start_session_user = async () => {
      await axios.get(urlConectUser, {params:{username:user.username, password:user.password}})
      .then(response => {
        
        return response.data
      })
      .then(response => {
        if (response.length > 0) {
          const respons = response[0]
          setUser(respons)
          alert(`Bienvenido  ${respons.name} ${respons.lastname}`)
        }
      })
      .catch(error => {
      
      })}

const router = useRouter()
  const handleClick = () => {router.back()};
  const createUser = () => {router.push("/login-user/create-user")};
  const passwordReset = () => {router.push("/login-user/password-reset")};
  const conditions = () => {router.push("/privacy-and-information")};

  return  { 
    idConectFacebook,
		idConectGmail,
    user,
		userGmail,
		userFacebook,
		loginFacebook,
    signOutFacebook,
   	loginGoogle,
    signOutGoogle,
	  loginUser,
    signOutUser,
	  start_session_user,
    handleClick,
		createUser,
		passwordReset,
		conditions,    
    // useSession,
    // session
	}
}