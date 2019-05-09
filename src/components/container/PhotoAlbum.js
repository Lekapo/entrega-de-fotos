import React, { Component } from 'react'
import { FlatList, View, ActivityIndicator } from 'react-native'
import { Storage } from 'aws-amplify'
import { Thumbnail, DownloadAlbum } from '../presentation'
import { downloadAlbum } from '../../actions'
import { Button } from 'react-native-elements';

class PhotoAlbum extends Component {

    constructor() {
        super()
        this.state = {
            data: null,
            uri: [],
            loaded: false,
        }
    }
    componentDidMount() {

        Storage.list('fotos', { level: 'private' })
            .then(result => {

                console.log('result', result.slice(1))
                this.setState({
                    data: result.slice(1)
                });
                const resultLength = result.slice(1).length - 1
                result.slice(1).map((item, index) => {
                    Storage.get(item.key, { level: 'private' })
                        .then(result => {

                            this.state.uri[index] = result
                            this.state.data[index].source = { uri: result }

                            //check if all uri are loaded in state
                            if (this.state.uri[resultLength]) this.setState({ loaded: true })
                        })
                })
            })
            .catch(err => console.log('err', err))
    }

    _getAlbum = () => {

        downloadAlbum(this.state.data)
    }


    _renderPhoto = ({ item, index }) => {
        console.log('uri', this.state.uri[index])
        return <Thumbnail
            item={item.key}
            index={index}
            data={this.state.data}
            uri={this.state.uri[index]}
        />
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {this.state.loaded ?
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <DownloadAlbum getAlbum={() => this._getAlbum()} />

                        <FlatList
                            data={this.state.data}
                            numColumns={3}
                            renderItem={this._renderPhoto}
                        />
                    </View>
                    :
                    <ActivityIndicator style={{ alignSelf: 'center' }} size="large" color='rgb(225,225,225)' />
                }
            </View>
        )
    }
}

export default PhotoAlbum
