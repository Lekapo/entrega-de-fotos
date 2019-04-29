import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Auth } from 'aws-amplify'
import { PhotoAlbum } from '../components/container'
import { LogoTitle } from '../components/presentation'

class MainScreen extends Component {
    static navigationOptions = {
        headerTitle: <LogoTitle />,
        headerRight: (
            <TouchableOpacity onPress={() => {
                Auth.signOut();
            }} 
            style={{marginRight: 10}}>
                <Text>SAIR</Text>
            </TouchableOpacity>
        ),
    }

    render() {
        return (
                <PhotoAlbum />
        )
    }
}

export default MainScreen