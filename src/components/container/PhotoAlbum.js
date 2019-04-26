import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { Storage } from 'aws-amplify'
import { Thumbnail } from '../presentation'
import { downloadAlbum } from '../../actions'
import { Button } from 'react-native-elements';

class PhotoAlbum extends Component {

    constructor() {
        super()
        this.state = {
            data: null,
        }
    }
    componentDidMount() {

        Storage.list('fotos', { level: 'private' })
            .then(result => {

                console.log('result', result.slice(1))
                this.setState({
                    data: result.slice(1)
                });

                result.slice(1).map((item, index) => {
                    Storage.get(item.key, { level: 'private' })
                        .then(result => {
                            this.state.data[index].source = { uri: result }
                        })
                        
                })

            })
            .catch(err => console.log('err', err))
    }

    getAlbum = () => {

        downloadAlbum(this.state.data)
    }
    _renderPhoto = ({ item, index }) => {
        return <Thumbnail item={item.key} index={index} data={this.state.data} />
    }


    render() {




        return (
            <View>
                {this.state.data && <Button onPress={() => this.getAlbum()} title='Download Tudo' />}
                <FlatList
                    data={this.state.data}
                    numColumns={3}
                    renderItem={this._renderPhoto}
                />
            </View>
        )
    }
}

export default PhotoAlbum
