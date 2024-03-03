import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#16151B',
        width: '100vw',
        height: '100vh',
        display: 'flex',
    },
    buttonsContainer: {
        width: '84%',
        height: 60,
        position: 'absolute',
        bottom: 60,
        borderRadius: 15,
        left: `calc((100vw - 84%) / 2)`
    },
    signinButton: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
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
    main: {
        marginTop: 60,
        marginLeft: 40,
        display: 'flex',
        justifyContent: 'space-between',
        height: '28vh'
    },
    title: {
        fontFamily: 'Figtree_700Bold',
        color: '#fff',
        fontSize: 38,
    },
    secondary: {
        fontFamily: 'Figtree_300Light',
        color: '#fff',
        fontSize: 30,
    },
    textBoxes: {
        display: 'flex',
        gap: 20,
        alignItems: 'center',
        marginTop: '10vh'
    },
    inputText: {
        color: '#fff',
        fontFamily: 'Figtree_400Regular',
        fontSize: 14,
        backgroundColor: '#16151b',
        position: 'absolute',
        left: 17,
        top: -8,
        paddingHorizontal: 10,
    },
    input: {
        width: 350,
        height: 60,
        borderColor: "#ffffff40",
        borderWidth: 1,
        borderRadius: 15,
        outlineStyle: 'none',
        color: '#fff',
        fontFamily: 'Figtree_400Regular',
        fontSize: 16,
        paddingHorizontal: 20
    },
    textBox: {
        position: 'relative'
    }
});