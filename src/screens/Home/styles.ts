import {StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent: 'center',
        justifyContent: 'center',


        backgroundColor: '#333333'
    },
    formNewTask:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        width: '80%',
        height:54,
        backgroundColor: '#262626',

        marginTop: -50,

        borderColor: 'red',

    },
    inputTask:{
        alignItems: 'center',
        justifyContent: 'center',
        

        borderColor: 'red'
    },
    buttonTask:{
        width:52,
        height:52,

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor:'#1E6F9F',
        borderRadius: 6,
    }
})