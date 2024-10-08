import { createUserWithEmailAndPassword, signInWithEmailAndPassword   } from "firebase/auth";

export async function createNewUser(auth: any, email: string, password: string) {
  console.log("MAKINGN EW USER")
  return await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential: any) => {
    const user = userCredential.user;
    return {
      user: user
    }

  })
  .catch((error: any) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      errorCode: errorCode,
      errorMessage: errorMessage
    }
  });
}

export async function signInUser(auth: any, email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential: any) => {
    const user = userCredential.user;
    
    return {
      user: user
    }

  })
  .catch((error: any) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      errorCode: errorCode,
      errorMessage: errorMessage
    }
  });
}