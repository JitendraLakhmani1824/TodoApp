import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { addNote } from './Actions';

class AddNote extends React.PureComponent {

    state = { value: null }

    render() {
        return (
            <View style={{ flex: 1, paddingTop: 20, backgroundColor: 'white', paddingHorizontal: 20 }}>
                {this.renderTextInput()}
                {this.renderSubmitButton()}
            </View>
        )
    }

    renderTextInput = () => {
        return (
            <TextInput
                value={this.state.value}
                placeholder={'Add a Note'}
                style={{ height: 40, borderWidth: 1, borderColor: '#ddd', borderRadius: 5, paddingHorizontal: 8 }}
                onChangeText={(value) => { this.setState({ value }) }}
            />
        )
    }

    renderSubmitButton = () => {
        return (
            <TouchableOpacity
                onPress={this.onPress}
                style={{
                    height: 40, width: 100, justifyContent: 'center',
                    alignItems: 'center', backgroundColor: '#4286f4', marginTop: 30, alignSelf: 'center'
                }}>
                <Text style={{fontSize: 16, color: 'white'}}>{'Add'}</Text>
            </TouchableOpacity>
        )
    }

    onPress = () => {
        const { addNote, email, navigation: { goBack } } = this.props;
        const { value } = this.state;
        addNote(value, email);
        goBack();
    }
}

const mapStateToProps = ({Login}) => {
    return {
        email: Login.email
    }
}

export default connect(mapStateToProps, { addNote })(AddNote)