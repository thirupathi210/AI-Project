import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "../ChatApplication/firebaseConfig";

export const signUp = (user) => {
  return async (dispatch) => {
    const auth = getAuth(app);
    const db = getFirestore(app);

    dispatch({type: '${authConstants.USER_LOGIN}_REQUEST'}); // Dispatching an action to show the spinner
    
    try {
      console.log("Dispatching signUp action with:", user); // Log input data

      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);

      // Extract user ID
      const userId = userCredential.user.uid;
    

      // Save user data in Firestore
      await setDoc(doc(db, "users", userId), {
        uid: userId, // Include uid in the user data
        name: `${user.firstname} ${user.lastname}`,
        email: user.email,
        createdAt: new Date().toISOString(),
      });

      console.log("User data added successfully:", { userId, email: user.email });

      // Dispatch success action (visible in Redux DevTools)
      dispatch({ type: "SIGNUP_SUCCESS", payload: userCredential.user });
      dispatch({
        type:'${authConstants.USER_LOGIN}_SUCCESS',
        payload: {user: userCredential}
      })

    } catch (error) {
      console.error("Error:", error.message);

      // Dispatch error action (visible in Redux DevTools)
      dispatch({ type: "SIGNUP_ERROR", payload: error.message });
      dispatch({
        type:'${authConstants.USER_LOGIN}_FAILURE',
        payload: {error}
      })
    }
  };
};
