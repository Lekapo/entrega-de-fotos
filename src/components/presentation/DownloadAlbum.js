import React, { Component } from 'react'
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import config from '../../config'

class DownloadAlbum extends Component {

    render() {
        const downloadIconColor = (this.props.isDownloaded) ? "rgb(150, 150, 150)" : null
        return (
            <TouchableOpacity
                activeOpacity={0.4}
                onPress={this.props.getAlbum}
                disabled={this.props.isDownloaded}
                style={{
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    borderColor: '#A7A7AA',

                    flexDirection: 'row',
                    padding: 10,
                    alignItems: 'center',
                }}
            >
                <Image
                    style={{
                        marginLeft: 'auto',
                        height: 25,
                        width: 25,
                    }}
                    source={config.images.downloadIcon}
                />
                <Text style={{
                    fontSize: 16, 
                    marginLeft: 5, 
                    marginRight: 'auto' }}>Baixar album</Text>


            </TouchableOpacity>
        )
    }
}

export default DownloadAlbum
