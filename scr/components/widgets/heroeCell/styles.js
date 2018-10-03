import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    cellContainer: {
        height: 290,
    },
    image: {
        width: '100%',
        height: 250,
    },
    detailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(30,30,30,0.8)',
    },
    label: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgb(255,0,37)',
    }
})