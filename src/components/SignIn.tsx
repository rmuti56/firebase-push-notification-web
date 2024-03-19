import {
  signInWithApplePopup,
  signInWithFacebookPopup,
  signInWithGooglePopup,
} from "../libs/firebase/firebase-config";

const SignIn = () => {
  const handleSignInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    const idToken = await response.user.getIdToken();
    console.log("idToken :>> ", idToken);
  };

  const handleSignInWithFacebook = async () => {
    const response = await signInWithFacebookPopup();
    console.log("response :>> ", response);
    const idToken = await response.user.getIdToken();
    console.log("idToken :>> ", idToken);
  };

  const handleSignInWithApple = async () => {
    const response = await signInWithApplePopup();
    console.log("response :>> ", response);
    const idToken = await response.user.getIdToken();
    console.log("idToken :>> ", idToken);
  };

  return (
    <div>
      <button onClick={handleSignInWithGoogle}>Sign In With Google</button>
      <hr />
      <button onClick={handleSignInWithFacebook}>Sign In With Facebook</button>
      <hr />
      <button onClick={handleSignInWithApple}>Sign In With Apple</button>
    </div>
  );
};

export default SignIn;
