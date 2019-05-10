import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import config from '../../config'

class shareButton extends Component {
    
    render() {
        
        return (
            <TouchableOpacity
                activeOpacity={0.4}
                onPress={this.props.sharePhoto}
            >
                <Image
                    style={{
                        height: 32,
                        width: 32,
                    }}
                    source={config.images.shareIcon} />

            </TouchableOpacity>
        )
    }
}

export default shareButton
