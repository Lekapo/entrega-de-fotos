import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { S3Image } from 'aws-amplify-react-native';
import { BottomBar } from '../container';

class Photo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            width: 0,
            height: 0,
            hideBottonBar: true,

        }
    }

    hideBottonBar = () => {
        this.setState({
            hideBottonBar: !this.state.hideBottonBar,
        })
    }

    render() {
        return (
            <View style={{backgroundColor: 'rgb(0,0,0)'}}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={this.hideBottonBar}
                >

                    <S3Image
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                        level='private'
                        imgKey={this.props.imgKey}
                        resizeMode='contain'
                    />
                </TouchableOpacity>

                {/* if hideBottomBar is true render component, else null */}
                {this.state.hideBottonBar
                    ? <BottomBar
                        imgKey={this.props.imgKey}
                    />
                    : null}

            </View>


        )
    }
}

export default Photo
