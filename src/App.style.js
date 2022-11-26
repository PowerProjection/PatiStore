import { StyleSheet,Dimensions } from "react-native";
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    mainScreen:{
        display:"flex",
        flex:1,
        backgroundColor:"white"
    },
    banner:{
        fontSize:30,
        fontWeight:'700',
        color:'purple', 
        marginLeft:6
    },
    searchBar:{
        fontSize:20,
        backgroundColor:"#eeeeee",
        margin:6,
        borderRadius:10
    },
    productView:{
        flex:1,
        backgroundColor:"#eeeeee",
        margin:6,
        paddingRight:8,
        paddingLeft:8,
        justifyContent:"space-around",
        alignItems:"center",
        borderRadius:10
    },
    productImage:{
        width:"100%",
        height:windowHeight /3,
        margin:10,
        borderRadius:10,
        resizeMode:"contain"
    },
    productInfo:{
        alignSelf:"flex-start"
    },
    productTitle:{
        fontSize:18,
        color:"black",
        fontWeight:"700"
    },
    productPrice:{
        fontSize:17,
        fontWeight:"700",
        color:"#ff44aa"
    },
    productStock:{
        color:"red",
        fontWeight:"bold",
        fontSize:17
    }


})