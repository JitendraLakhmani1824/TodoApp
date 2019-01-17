import { createStackNavigator } from 'react-navigation';
import { Home, AddNote, Login, Splash } from '../Screens';

export default createStackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: { header: null }
    },
    Login: {
        screen: Login,
        navigationOptions: { header: null }
    },
    Home: {
        screen: Home,
        navigationOptions: { title: 'Home' }
    }, AddNote: {
        screen: AddNote,
        navigationOptions: { title: 'Add Note' }
    }
})