import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { PhotoContainer } from '../components/container';

class PhotoScreen extends Component {

    constructor(props) {
      super(props)

      this.props.navigation.setParams({
        header: false
    })
        
      this.handleToggleTitleBar = this.handleToggleTitleBar.bind(this);
    }
    

    static navigationOptions = ({ navigation }) => ({
        header: navigation.state.params.header ? undefined : null,
        headerTransparent: true,
        headerStyle: {
            backgroundColor: 'rgba(245, 245, 245, 0.85)',
          },
    })

    handleToggleTitleBar = () => {
        this.props.navigation.setParams({
            header: !this.props.navigation.state.params.header
        })
    }

    render() {

        const { navigation } = this.props
        const imgKey = navigation.getParam('key')
        const listIndex = navigation.getParam('listIndex')
        const data = navigation.getParam('data')

        return (
            <View>
                <StatusBar hidden={true} />

                <PhotoContainer
                    imgKey={imgKey}
                    listIndex={listIndex}
                    data={data}
                    toggleTitleBar={this.handleToggleTitleBar}
                />
            </View>
        )
    }
}

export default PhotoScreen


