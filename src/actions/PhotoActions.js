import RNFetchBlob from 'rn-fetch-blob'
import { PermissionsAndroid } from 'react-native'
import { Storage } from 'aws-amplify'

export const downloadAlbum = (data) => {

    data.map((item) => {

        let dirs = RNFetchBlob.fs.dirs
        const photoTitle = item.key.substring(item.key.lastIndexOf('/') + 1)
        const path = dirs.DCIMDir + '/Eviel/' + photoTitle
    
    
        RNFetchBlob.fs.exists(path)
            .then((exist) => {
                exist ? null : downloadPhoto(item.key)
            })
            .catch((err) => { console.log('err', err) })
    })
}

export const downloadPhoto = (imgKey) => {

    async function requestWritePremission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'Cool Photo App needs access to your storage ' +
                        'so you can save your photos',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return this.fetchPhoto(imgKey);
            } else {
                console.log(granted);
            }
        } catch (err) {
            console.warn(err);
        }
    }

    fetchPhoto = (imgKey) => {
        Storage.get(imgKey, { level: 'private' })
            .then(result => {

                const photoTitle = imgKey.substring(imgKey.lastIndexOf('/') + 1)
                let dirs = RNFetchBlob.fs.dirs
                const path = dirs.DCIMDir + '/Eviel/' + photoTitle

                RNFetchBlob
                    .config({
                        addAndroidDownloads: {
                            path: path,
                            useDownloadManager: true, // <-- this is the only thing required
                            // Optional, override notification setting (default to true)
                            notification: true,
                            // Optional, but recommended since android DownloadManager will fail when
                            // the url does not contains a file extension, by default the mime type will be text/plain
                            mime: 'image/jpg',
                            description: 'File downloaded by eviel.'
                        },

                    })
                    .fetch('GET', result, {
                        //some headers ..
                    })
                    .then((res) => {
                        // the path should be dirs.DocumentDir + 'path-to-file.anything'
                        
                        return true
                    })
                    .catch((err) => { console.log('err', err); return false })
            }
            )
            .catch(err => console.log(err));
    }
    return requestWritePremission()
}