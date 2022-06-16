<h1 align="center">ChatBook📱📕</h1>
<h2>Steps:</h2>
<h3>1.Initial steps</h3>
<p>
  - Installing essential libraries such as firebase,react-router-dom,react-chat-engine.<br>
  - created basic login page with google signup <br>
  </p>
<h3>2.Setting up firebase authentication</h3>
<p>
  - create new project.<br>
  - Add app for web.<br>
  - copy the firebase template for npm(i.e fireabase.js) and paste it into your src/firebase.js file.<br>
  - export const auth variable so that can be imported in other components which basically has getAuth(app) method it returns authentication instance w.r.t ur app.<br>
  - Export const signin function which contains method signInWithPop to which provided details like auth and provider(instance for GoogleAuthProvider) and this can be used in login.js file or can be fired when user clicks on google button .
  </p>
 <h3>3.Create context api</h3>
<p>
  - created contexts folder in which authcontext.js file.<br>
  - created context hook and api,usestate to store users data and loading usestate.<br>
  - And in useeffect added dependency array [user] and have method onAuthStateChanged contains callback function which will call setuser,setloading function and if user is valid then navigate to ("/chats")<br>
  -  This context hook can be imported in App.js and will be wrapped up between Router

  </p>
   <h3>4.Setting up chatengine</h3>
<p>
  - create account on chatengine.io and create one project which contains project_id,key.<br>
  - fetch it's api using axios.get if users exist or else axios.post if its not with having header values,data(user.email,user.uid) in chats.js.<br>

  </p>
    <h3>5.Deploy it's build in netlify</h3>
<p>
  - link:- <a href="https://chat-book.netlify.app/">chatbook</a>

  </p>
