import React, { Component } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import config from '../../config'
import { DownloadButton, ShareButton } from '../presentation'
import { downloadPhoto } from '../../actions'
import RNFetchBlob from 'rn-fetch-blob'
import Share from 'react-native-share';

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
        const dir = Platform.OS === 'android' ? dirs.DCIMDir : dirs.DocumentDir
        const path = dir + '/Eviel/' + photoTitle

        RNFetchBlob.fs.exists(path)
            .then((exist) => {
                this.setState({
                    isDownloaded: exist,
                })
            })
            .catch((err) => { console.log('err', err) })
    }

    getPhoto = () => {
        downloadPhoto(this.props.imgKey)
            .then((res) => {
                console.log('then')
                this.setState({
                    isDownloaded: true
                })
            })
    }

    sharePhoto = () => {

        RNFetchBlob
            .config({
                fileCache: true,
                // by adding this option, the temp files will have a file extension
                appendExt: 'jpg'
            })
            .fetch('GET', this.props.imgUri, {
                //some headers ..
            })
            .then((res) => {
                // Beware that when using a file path as Image source on Android,
                // you must prepend "file://"" before the file path
                const shareOptions = {
                    title: 'Compartilhar...',
                    message: 'Compartilhado atraves do app',
                    url: Platform.OS === 'android' ? 'file://' + res.path() : '' + res.path(),
                    type: 'image/jpg',
                }

                Share.open(shareOptions)
                    .then((res) => {
                        console.log(res)
                    })
                    .catch((err) => { err && console.log(err); });
            })
    }

    render() {
        return (
            <View style={styles.userBar}>
                <DownloadButton getPhoto={this.getPhoto} isDownloaded={this.state.isDownloaded} />
                <ShareButton sharePhoto={this.sharePhoto} />
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
        justifyContent: "space-evenly",
        alignItems: 'center',

    },

})
export default BottomBar
