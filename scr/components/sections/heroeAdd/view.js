import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Button, TextInput } from '../../widgets'
import ImagePicker from 'react-native-image-picker'

export default class HeroeAdd extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
        }

        this.options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
    }

    _onImagePickerTapped() {
        ImagePicker.showImagePicker(this.options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    _renderImageInput() {
        const imageUri = this.state.avatarSource ? { uri: this.state.avatarSource.uri } : null
        return (
            <View>
                <TouchableOpacity style={{}} onPress={() => this._onImagePickerTapped()}>
                    <Image source={imageUri} style={{ width: 200, height: 200 }} resizeMode={'contain'} />
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{'Press to choose image'}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ padding: 20 }}>
                    <TextInput
                        label={'Heroe name:'}
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })}
                        placeHolder={'Spider-Man'}
                        multiline={false}
                    />
                </View>
                <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
                    <TextInput
                        label={'Heroe description:'}
                        value={this.state.description}
                        onChangeText={description => this.setState({ description })}
                        placeHolder={'Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. '}
                        multiline={true}
                    />
                </View>

                <View style={{ paddingHorizontal: 20, paddingBottom: 40 }}>
                    {this._renderImageInput()}
                </View>

                <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
                    <Button label={'Save'} />
                </View>
            </View>
        )
    }
}