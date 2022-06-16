
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider ,signInWithPopup} from  "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxS3RjC7TQE_8SGWowEejM6Vwn4MsQUeE",
  authDomain: "chat-book-750b1.firebaseapp.com",
  projectId: "chat-book-750b1",
  storageBucket: "chat-book-750b1.appspot.com",
  messagingSenderId: "869124547526",
  appId: "1:869124547526:web:d32d748b22516530d948c7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signin = async()=>{
  const result = await signInWithPopup(auth, provider);
  console.log(result.user);
}
