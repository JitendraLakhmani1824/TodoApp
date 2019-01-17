import React from 'react';
import { View, Text } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { signIn, signOut } from './Actions';
import { connect } from 'react-redux';

class Login extends React.PureComponent {

    componentWillReceiveProps(nextProps) {
        const { loggedIn, navigation: { replace } } = this.props;
        if (nextProps.loggedIn && loggedIn != nextProps.loggedIn) {
            replace('Home');
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                {this.renderTitle()}
                {this.renderGoogleButton()}
            </View>
        )
    }

    renderTitle = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#333', fontSize: 20, marginBottom: 20, fontWeight: '600' }}>{'Todo App'}</Text>
            </View>
        )
    }

    renderGoogleButton = () => {
        const { signIn } = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ color: '#888', fontSize: 16, marginBottom: 20 }}>{'Login using Google'}</Text>
                <GoogleSigninButton
                    style={{ width: 120, height: 48 }}
                    size={GoogleSigninButton.Size.Icon}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={signIn}
                // disabled={this.state.isSigninInProgress} 
                />
            </View>
        )
    }

}

const mapStateToProps = ({ Login }) => {
    return {
        loggedIn: Login.loggedIn
    }
}

export default connect(mapStateToProps, { signIn, signOut })(Login);