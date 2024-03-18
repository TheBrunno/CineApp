import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        display: 'flex',
        alignItems: 'center'
    },
    mainMovie: {
        width: '100vw',
        height: 608,
        resizeMode: 'contain',
        marginTop: -12
    },
    imageContainer: {
        width: '100vw',
        height: 608,
    },
    linearGradientContainer: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: 5
    },
    mainMovieText: {
        fontSize: 40,
        fontFamily: 'Figtree_700Bold',
        width: 215,
        color: '#fff'
    },
    infoMovie: {
        position: 'absolute',
        zIndex: 6,
        marginLeft: 30,
        bottom: 50
    },
    tags: {
        display: 'flex',
        width: 150,
        gap: 40,
        flexDirection: 'row'

    },
    tagText: {
        color: '#fff',
        opacity: '50%'
    },
    circle: {
        width: 5,
        height: 5,
        borderRadius: '50%',
        backgroundColor: '#fff',
        opacity: '50%'

    },
    tag: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    },
    synopsis: {
        color: '#B5B5B5',
        fontFamily: 'Figtree_500Medium',
        width: 330,
        marginTop: 5
    },
    watch: {
        backgroundColor: '#fff',
        height: 30,
        width: 100,
        border: 'none',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Figtree_700Bold',

    }
});