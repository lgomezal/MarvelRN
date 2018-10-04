import { StyleSheet } from 'react-native'
import * as Colors from '../../../commons/colors/'

export default StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.main,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white'
    }
})