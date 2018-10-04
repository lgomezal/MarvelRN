import { StyleSheet } from 'react-native'
import * as Colors from '../../../commons/colors/'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.mainDark
    },
    image: {
        width: '100%',
        height: 250
    },
    dataContainer: {
        alignItems: 'center',
        padding: 20,
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        margin: 10,
    },
    text: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.main,
    }
})