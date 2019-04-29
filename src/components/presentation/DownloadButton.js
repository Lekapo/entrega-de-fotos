import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import config from '../../config'

class DownloadButton extends Component {
    
    render() {
        const downloadIconColor = (this.props.isDownloaded) ? "rgb(200, 200, 200)" : null
        return (
            <TouchableOpacity
                activeOpacity={0.4}
                onPress={this.props.getPhoto}
                disabled={this.props.isDownloaded}
            >
                <Image
                    style={{
                        height: 32,
                        width: 32,
                        tintColor: downloadIconColor,
                    }}
                    source={config.images.downloadIcon} />

            </TouchableOpacity>
        )
    }
}

export default DownloadButton
