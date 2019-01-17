import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import NoteCell from './NoteCell';
import { connect } from 'react-redux';
import { deleteNote } from './Actions';
import Icon from 'react-native-vector-icons/Feather';
import { signOut } from '../Login/Actions';

class Home extends React.PureComponent {

    static navigationOptions = ({ navigation }) => {
        const onPress = navigation.getParam('onPress');
        return {
            headerRight: <TouchableOpacity onPress={onPress}
                style={{ height: 40, width: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Icon name={'plus'} size={24} />
            </TouchableOpacity>
        }
    }

    componentDidMount() {
        const { navigation: { setParams } } = this.props;
        setParams({ onPress: this.onPress })
    }


    componentWillReceiveProps(nextProps) {
        const { loggedIn, navigation: { replace } } = this.props;
        if (!nextProps.loggedIn && loggedIn != nextProps.loggedIn) {
            replace('Login');
        }
    }

    onPress = () => {
        const { navigation: { navigate } } = this.props;
        navigate('AddNote');
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {this.renderTodoList()}
                {this.renderLogoutButton()}
            </View>
        )
    }

    renderTodoList = () => {
        const { list } = this.props;
        return (
            <FlatList
                data={list}
                renderItem={this.renderItem}
                keyExtractor={(_, index) => index.toString()}
            />
        )
    }

    renderItem = ({ index, item }) => {
        return <NoteCell note={item} index={index} onDelete={this.onDeletePress} />
    }

    onDeletePress = (index) => {
        const { deleteNote, email } = this.props;
        deleteNote(index, email);
    }


    renderLogoutButton = () => {
        const { signOut } = this.props;
        return (
            <TouchableOpacity
                onPress={signOut}
                style={{
                    height: 40, width: '90%', justifyContent: 'center', margin: 12,
                    alignItems: 'center', backgroundColor: 'red', marginTop: 30, alignSelf: 'center'
                }}>
                <Text style={{ fontSize: 16, color: 'white' }}>{'Logout'}</Text>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = ({ Home, Login }) => {
    return {
        list: Home.list[`${Login.email}`] || [],
        loggedIn: Login.loggedIn,
        email: Login.email
    }
}

export default connect(mapStateToProps, { deleteNote, signOut })(Home)