import React, { Component } from 'react'
import { Photo } from '../presentation';


class PhotoContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            imgUri: null,
            isDownloaded: false,
        }
    }

    render() {
        return <Photo imgKey={this.props.imgKey} listIndex={this.props.listIndex} data={this.props.data} />
    }
}

export default PhotoContainer
