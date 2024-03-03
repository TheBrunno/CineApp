import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#16151B',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        width: 300,
        height: 275,
    },
    mainContainer: {
        width: 300,
        marginTop: '14vh'
    },
    mainText: {
        fontFamily: 'Figtree_700Bold',
        color: '#fff',
        fontSize: 38,
        textAlign: 'center',
        marginTop: 70
    },
    secondaryText: {
        fontFamily: 'Figtree_300Light',
        color: '#fff',
        fontSize: 18,
        marginTop: 40,
        textAlign: 'center'
    },
    buttonsContainer: {
        backgroundColor: '#3A3940',
        display: 'flex',
        flexDirection: 'row',
        width: '84%',
        height: 60,
        position: 'absolute',
        bottom: 60,
        borderRadius: 15
    },
    signinButton: {
        backgroundColor: '#fff',
        width: '50%',
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItens: 'center',
    },
    signinText: {
        textAlign: 'center',
        fontFamily: 'Figtree_600SemiBold',
        fontSize: 18
    },
    signupButton: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItens: 'center',
    },
    signupText: {
        textAlign: 'center',
        fontFamily: 'Figtree_600SemiBold',
        fontSize: 18,
        color: '#fff'
    }
});