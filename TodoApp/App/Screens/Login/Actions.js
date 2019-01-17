import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import { LOGGED_IN, LOGGED_OUT } from './ActionTypes';

export const signOut = () => {
    return async (dispatch) => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            dispatch({ type: LOGGED_OUT })
        } catch (error) {
            console.error(error);
        }
    }
};

export const signIn = () => {
    return async (dispatch) => {
        dispatch({ type: LOGGED_IN, email: 'harry.goon@gmail.com' })
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            dispatch({ type: LOGGED_IN, email: userInfo.user.email })
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                alert("User cancelled");
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (f.e. sign in) is in progress already
                alert("Operation in progress")
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                alert("Play services not available")
            } else {
                // some other error happened
                alert(error)
            }
        }
    }
};

export const configureGoogle = () => {
    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        hostedDomain: '', // specifies a hosted domain restriction
        loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
        forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
        accountName: '', // [Android] specifies an account name on the device that should be used
        iosClientId: '996972094200-ur2i5efbjh5gnserk113avtk2qu4chji.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
}