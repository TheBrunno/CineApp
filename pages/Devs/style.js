import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#101010',
        flex: 1,
        display: 'flex',
    },
    logo: {
        width: 209,
        height: 70
    },
    navContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 51,
        marginLeft: 19,
        marginTop: 23,
        paddingBottom: 20,
        alignItems: 'center',
    },
    mainContainer: {
        backgroundColor: '#151515',
        width: '100vw',
        height: '100%',
        borderRadius: 30
    },
    title: {
        marginTop: 60,
        width: 350,
        fontFamily: 'Figtree_600SemiBold',
        fontSize: 30,
        color: '#fff',
        marginLeft: 39,
        marginBottom: 50
    },
    dev: {
        display: 'flex',
        gap: 30,
        flexDirection: 'row',
        marginHorizontal: 'auto',
        position: 'relative'
    },
    profile: {
        width: 160,
        height: 191
    },
    name: {
        fontFamily: 'Figtree_600SemiBold',
        color: '#fff',
        fontSize: 18,
        marginTop: 5
    },
    devContainer: {
        display: 'flex',
        gap: 53
    },
    iconDiego: {
       position: 'absolute',
       top: 51,
       left: 35,
       right: 35
    },
});