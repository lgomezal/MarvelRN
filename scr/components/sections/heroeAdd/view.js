import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
import styles from './styles'
import { Button, TextInput } from '../../widgets'
import ImagePicker from 'react-native-image-picker'

export default class HeroeAdd extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            image: null,
        }

        this.options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
    }

    _validateForm() {
        const { name, description, image } = this.state
        if (name && description && image) {
            return true
        } else {
            return false
        }
    }

    _onSubmit() {
        if (this._validateForm()) {
            const { name, description, image } = this.state
            if (this.props.isEdit) {
                const heroeId = this.props.heroe.id
                const imageData = this.state.image.data ? { image: this.setState.iamge.data } : {}
                const data = {
                    ...imageData,
                    name: name,
                    description: description,
                }
                // FUNCION PARA HACER PATCH
                //this.props.onSubmitCharacter(data)
            } else {
                const data = {
                    name: name,
                    description: description,
                    image: image.data,

                }
                Alert.alert('Post no implementado en App Marvel',
                    'Name new Heroe: ' + data.name + ' Description new Heroe: ' + data.description)
                this.props.onSubmitHeroe(data)
            }
        } else {
            Alert.alert('Attention', 'Complete all the fields')
        }
    }

    _onImagePickerTapped() {
        ImagePicker.showImagePicker(this.options, (response) => {
            if (response.uri && response.data) {
                let preview = { uri: response.uri };
                let data = 'data:image/jpeg;base64,' + response.data

                this.setState({
                    image: { preview, data }
                });
            }
        });
    }

    _renderImageInput() {
        const imageUri = this.state.image ? this.state.image.preview : null
        const imageLabel = this.state.image ? 'Press to choose other image' : 'Press to choose image'
        return (
            <View>
                <TouchableOpacity style={styles.imageContainer} onPress={() => this._onImagePickerTapped()}>
                    <Image source={imageUri} style={styles.image} resizeMode={'cover'} />
                    <Text style={styles.imageText}>{imageLabel}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'rgb(24,24,24)' }}>
                <View style={styles.container}>
                    <View style={{ padding: 20 }}>
                        <TextInput
                            label={'Heroe name:*'}
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })}
                            placeHolder={'Spider-Man'}
                            multiline={false}
                        />
                    </View>
                    <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
                        <TextInput
                            label={'Heroe description:*'}
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
                        <Button label={'Save'} onPress={() => this._onSubmit()} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}