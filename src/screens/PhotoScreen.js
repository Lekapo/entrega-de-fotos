import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { PhotoContainer } from '../components/container';

class PhotoScreen extends Component {

    constructor(props) {
      super(props)
    }
    

    static navigationOptions = {
        header: null,
    }

    render() {

        const { navigation } = this.props
        const imgKey = navigation.getParam('key')
        const listIndex = navigation.getParam('listIndex')
        const data = navigation.getParam('data')

        return (
            <View>
                <StatusBar hidden={true} />

                <PhotoContainer imgKey={imgKey} listIndex={listIndex} data={data} />
            </View>
        )
    }
}

export default PhotoScreen


