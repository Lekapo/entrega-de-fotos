import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { S3Image } from 'aws-amplify-react-native'

class Thumbnail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            screenWidth: 0
        }
    }

    componentDidMount() {
        this.setState({
            screenWidth: Dimensions.get("window").width / 3 //divided by the number of columns
        })
    }



    render() {



        return (

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.props.navigation.navigate(
                    'photoScreen',
                    {
                        key: this.props.item,
                        listIndex: this.props.index,
                        data: this.props.data,
                    })}>

                <S3Image
                    style={{
                        width: this.state.screenWidth,
                        height: this.state.screenWidth,
                        borderWidth: StyleSheet.hairlineWidth,
                        borderColor: 'rgb(255,255,255)'
                    }}
                    level='private'
                    imgKey={this.props.item}
                />

            </TouchableOpacity>
        )



    }
}


export default withNavigation(Thumbnail)
