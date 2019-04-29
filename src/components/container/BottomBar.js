import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import config from '../../config'
import { DownloadButton } from '../presentation'
import { downloadPhoto } from '../../actions'
import RNFetchBlob from 'react-native-fetch-blob'

class BottomBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isDownloaded: true,
        }
    }
    componentDidMount() {
        
        //Check if photo already exists in device
        let dirs = RNFetchBlob.fs.dirs
        const photoTitle = this.props.imgKey.substring(this.props.imgKey.lastIndexOf('/') + 1)
        const path = dirs.DCIMDir + '/Eviel/' + photoTitle

        console.log('bottomImgKey', this.props.imgKey)


        RNFetchBlob.fs.exists(path)
            .then((exist) => {
                this.setState({
                    isDownloaded: exist,
                })
            })
            .catch((err) => { console.log('err', err) })

    }

    getPhoto = () => {
        downloadPhoto(this.props.imgKey).then((res) => {

            this.setState({
                isDownloaded: true
            })
        })
    }

    render() {
        return (
            <View style={styles.userBar}>
                <DownloadButton getPhoto={this.getPhoto} isDownloaded={this.state.isDownloaded} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    userBar: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: config.styleConstants.rowHeight,
        backgroundColor: "rgba(245, 245, 245, 0.85)",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',

    },

})
export default BottomBar
