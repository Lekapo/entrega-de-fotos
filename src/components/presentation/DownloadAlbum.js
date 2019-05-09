import React, { Component } from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
import config from '../../config'

class DownloadAlbum extends Component {

    render() {
        const downloadIconColor = (this.props.isDownloaded) ? "rgb(150, 150, 150)" : null
        return (
            <TouchableOpacity
                activeOpacity={0.4}
                onPress={this.props.onPress}
                disabled={this.props.isDownloaded}
                style={{
                    flexDirection: 'row',
                    padding: 10,
                    alignContent: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image
                    style={{
                        height: 25,
                        width: 25,
                    }}
                    source={config.images.downloadIcon}
                />
                <Text style={{fontSize: 16, marginLeft: 5}}>Baixar album</Text>


            </TouchableOpacity>
        )
    }
}

export default DownloadAlbum
