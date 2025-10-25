// auth.js
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  updatePassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";

// ✅ Create user with email + password
export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// ✅ Sign in with email + password
export const doSignInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// ✅ Sign in with Google
export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

// ✅ Sign out
export const doSignOut = async () => {
  return auth.signOut();
};

// ✅ Send password reset email
export const doPasswordReset = async (email) => {
  return sendPasswordResetEmail(auth, email, {
    url: `${window.location.origin}/login`, // Redirect after reset
  });
};

// ✅ Change current user's password (requires recent login)
export const doPasswordChange = async (password) => {
  if (!auth.currentUser) throw new Error("No user is signed in");
  return updatePassword(auth.currentUser, password);
};

// ✅ Send email verification after signup
export const doSendEmailVerification = async () => {
  if (!auth.currentUser) throw new Error("No user is signed in");
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/login`, // Redirect after verification
  });
};
