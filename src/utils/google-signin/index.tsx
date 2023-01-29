import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

/**
 * Intialize the GoogleSignIn Variable
 * called in useEffect or ComponentDidMount
 */
function initialConfig() {
  GoogleSignin.configure();
}

/**
 * Check if the User has already Signed in using SignIn() Function
 * Calls `getCurrentUserInfo()` and `SignIn()` functions
 */

async function checkIfSignedIn() {
  const isSignedIn = await GoogleSignin.isSignedIn();
  if (isSignedIn) {
    getCurrentUserInfo();
  } else {
    signIn();
  }
}

/**
 * Sign In as a New User Function
 */

async function signIn() {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    onSignIn(userInfo);
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      return error.message;
    } else if (error.code === statusCodes.IN_PROGRESS) {
      return error.message;
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      return error.message;
    } else {
      return error.message;
    }
  }
}

/**
 * Gets the data anonymously from the user and pass it to `onSignIn()` function
 */

async function getCurrentUserInfo() {
  try {
    const userInfo = await GoogleSignin.signInSilently();
    onSignIn(userInfo);
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_REQUIRED) {
      signIn();
    } else {
    }
  }
}

/**
 * Does the Navigation to the next screens
 * @param {JSON} data - Contains JSON Values.
 */

function onSignIn(data: any) {
  //data =  {
  //   idToken: <String>
  //   scopes: [<Array of Scopes>],
  //   serverAuthCode: <String>
  //   user: {
  //     email: <String>,
  //     familyName: <String>,
  //     givenName: <String>,
  //     id: <String>,
  //     name: <String>,
  //     photo: <Image URI>,
  //   },
  // };

  console.log(data.user.email);
  console.log(data.user.photo);
  console.log(data.user.id);
  console.log(data.user.name);
}

export {initialConfig, signIn, onSignIn, checkIfSignedIn};
