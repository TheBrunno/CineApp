import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        display: 'flex',
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
        marginTop: 10
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
        marginTop: 10
    },
    watchText: {
        fontFamily: 'Figtree_700Bold',
    },
    exclusives: {
        width: '100%',
        height: 240,
        display: 'flex',
        marginBottom: 30,
        marginTop: -20
    },
    exclusiveTitle: {
        fontFamily: 'Figtree_700Bold',
        color: '#fff',
        fontSize: 20,
        marginLeft: 30,
    },
    exclusiveBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    exclusiveList: {
        width: '100%',
    },
    exclusiveImg: {
        width: 130,
        height: 200,
        marginTop: 10,
        resizemode: 'contain',
        left: 30
    },
    watchmore: {
        width: '100%',
        height: 170,
        display: 'flex',
        marginBottom: 40
    },
    moreList: {
        width: '100%',
    },
    moreImg: {
        width: 80,
        height: 130,
        marginTop: 10,
        resizemode: 'contain',
        left: 30
    },
    nav: {
        position: 'absolute',
        width: '100vw',
        height: 78,
        backgroundColor: '#101010',
        display: 'flex',
        flexDirection: 'row',
        zIndex: 10,
        justifyContent: 'space-between'
    },
    navField: {
        width: 226,
        height: 40,
        backgroundColor: '#1E1E1E',
        borderColor: '#3A3940',
        borderWidth: 1,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 11,
        marginLeft: 25,
        marginTop: 22
    },
    navFieldSearch: {
        width: 41,
        height: 30,
        backgroundColor: '#FF0036',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    devs: {
        marginTop: 22,
        marginRight: 15
    }
});