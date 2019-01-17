import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class NoteCell extends React.PureComponent {
    render() {
        const { note } = this.props;
        return (
            <View style={{
                height: 50, marginHorizontal: 8, borderBottomWidth: 1, alignItems: 'center',
                borderColor: '#eee', marginBottom: 5, paddingLeft: 16, flexDirection: 'row'
            }}>
                <View style={{ flex: 1, justifyContent: 'center', }}>
                    <Text style={{ fontSize: 12 }}>{note}</Text>
                </View>
                {this.renderDeleteButton()}
            </View>
        )
    }

    renderDeleteButton = () => {
        const { onDelete, index } = this.props;
        return (
            <TouchableOpacity
                onPress={onDelete.bind(null, index)}
                style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center'}}>
                <Icon name={'minus-circle'} size={20} color={'red'} />
            </TouchableOpacity>
        )
    }
}