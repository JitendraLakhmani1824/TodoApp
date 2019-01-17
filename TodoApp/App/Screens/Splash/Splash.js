import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { configureGoogle } from '../Login/Actions';

class Splash extends React.PureComponent {

    componentDidMount() {
        const { isLoggedIn, navigation: { replace } } = this.props;
        configureGoogle();
        replace(isLoggedIn ? 'Home' : 'Login')
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 12, color: '#c3c3c3' }}>{'Loading...'}</Text>
            </View>
        )
    }
}

const mapStateToProps = ({ Login }) => {
    return {
        isLoggedIn: Login.loggedIn
    }
}

export default connect(mapStateToProps)(Splash);