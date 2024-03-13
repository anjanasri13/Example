import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Main: {
      flex: 1,
      backgroundColor: "#DBD7F9",
    },
    container: {
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      marginTop:50,
      marginBottom:15,
      marginHorizontal:20,
    },
    box: {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        marginVertical: 15,
        marginHorizontal:15,
        
      },
    View1: {
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical: 15,
        marginHorizontal:15,
        
      },
      View2:{
        backgroundColor:"#FFFFFF",
        paddingVertical:12,
        paddingHorizontal:20,
        borderRadius:7,
        marginVertical: 5,
        marginHorizontal:15,
    },
      title:{
         fontWeight:"500",
         fontSize:11,
      },
      email:{
         fontSize:10,
      },
      Mode:{
        width:"100%",
        padding:"5%",
        alignItems:'center'
      },
      code:{
        textAlign:"center"
      }
  });
