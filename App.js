import * as React from 'react';
import { Text, View, Image } from 'react-native';
import Constants from 'expo-constants';


const App = () => {
  return (
    <View style={{
      width:'100%', 
      height:'100%', 
      backgroundColor:"white"}}>
    <View style={{
      alignItems:'center',
      marginTop: 10,
      height:20,
    }}>
    <Text style={{
      fontWeight:700,
    }}>
    Ipin
    </Text>
    </View>

    <View style={{
      flexDirection:'row',
      
    }}>
    <Image 
    source = {require('./assets/ipin.jpg')}
    style={{
      width:100,
      height:100,
      marginLeft:5,
      marginTop:20
    }}>

    </Image>

    <View>
        <View style={{
      flexDirection:'row',
      paddingTop:40,
      justifyContent:'space-evenly',
      paddingLeft:11
      
    }}>
    <Text style={{
      paddingRight:22,
      fontWeight:700
      }}>
    71
    </Text>
    <Text style={{
      fontWeight:700
    }}>
    52.5M
    </Text>
    <Text style={{
      paddingLeft:22,
      fontWeight:700
      }}>
    700
    </Text>
    </View>

    <View style={{
      flexDirection:'row',
      paddingTop:5,
      justifyContent:'space-evenly',
      paddingLeft:22,

      
    }}>
    <Text style={{
      paddingRight:10,
      fontWeight:400,
      fontSize:12
      }}>
    Posts
    </Text>
    <Text style={{
      fontWeight:400,
      fontSize:12,
      paddingLeft:10,
      paddingRight:10
    }}>
    Followers
    </Text>
    <Text style={{
      paddingLeft:10,
      fontWeight:400,
      fontSize:12
      }}>
    Following
    </Text>
    </View>

    </View>


    </View>

    <View>
    <Text style={{
      paddingLeft:10,
      fontWeight:500
    }}>
    ipin
    </Text>
    <Text style={{
      paddingLeft:10,
      fontWeight:400
    }}>
    "Upin nya gak ada."
    </Text>
    </View>

    <View style={{
      flexDirection:'row',
      justifyContent:'space-evenly',
      marginRight:10,
      
    }}>
    <Image 
    source = {require('./assets/gallery.png')}
    style={{
      width:25,
      height:25,
      marginTop:40,
      paddingLeft:10,
      paddingRight:10
    }}>

    </Image>
    <Image 
    source = {require('./assets/igtv.png')}
    style={{
      width:23,
      height:23,
      marginLeft:20,
      marginTop:40,
      opacity:0.5,
      paddingLeft:10,
      paddingRight:10
    }}>

    </Image>
    <Image 
    source = {require('./assets/follower.png')}
    style={{
      width:25,
      height:25,
      marginLeft:20,
      marginTop:40,
      opacity:0.5,
      paddingLeft:10,
      paddingRight:10
    }}>

    </Image>
   

    </View>

    <View style={{
      borderBottomWidth:0.2,
      marginTop:10,
      opacity:0.2
    }}>

    </View>

    <View style={{
      flexDirection:'row',
      justifyContent:'space-evenly'
    }}>
    <Image 
    source = {require('./assets/ipin.jpg')}
    style={{
      width:108,
      height:108,
      marginTop:2,
      paddingLeft:10,
      paddingRight:10
    }}>
    </Image>
    <Image 
    source = {require('./assets/ipin.jpg')}
    style={{
      width:108,
      height:108,
      marginLeft:2,
      marginTop:2,
      paddingLeft:10,
      paddingRight:10
    }}>
    </Image>
    <Image 
    source = {require('./assets/ipin.jpg')}
    style={{
      width:108,
      height:108,
      marginLeft:2,
      marginTop:2,
      paddingLeft:10,
      paddingRight:10
    }}>
    </Image>
    </View>

    <View style={{
      flexDirection:'row',
      justifyContent:'space-evenly'
    }}>
    <Image 
    source = {require('./assets/ipin.jpg')}
    style={{
      width:108,
      height:108,
      marginTop:2,
      paddingLeft:10,
      paddingRight:10
    }}>
    </Image>
    <Image 
    source = {require('./assets/ipin.jpg')}
    style={{
      width:108,
      height:108,
      marginLeft:2,
      marginTop:2,
      paddingLeft:10,
      paddingRight:10
    }}>
    </Image>
    <Image 
    source = {require('./assets/ipin.jpg')}
    style={{
      width:108,
      height:108,
      marginLeft:2,
      marginTop:2,
      paddingLeft:10,
      paddingRight:10
    }}>
    </Image>
    </View>
    <View style={{
      flexDirection:'row',
      justifyContent:'space-evenly'
    }}>
    <Image 
    source = {require('./assets/ipin.jpg')}
    style={{
      width:108,
      height:108,
      marginTop:2,
      paddingLeft:10,
      paddingRight:10
    }}>
    </Image>
    <Image 
    source = {require('./assets/ipin.jpg')}
    style={{
      width:108,
      height:108,
      marginLeft:2,
      marginTop:2,
      paddingLeft:10,
      paddingRight:10
    }}>
    </Image>
    <Image 
    source = {require('./assets/ipin.jpg')}
    style={{
      width:108,
      height:108,
      marginLeft:2,
      marginTop:2,
      paddingLeft:10,
      paddingRight:10
    }}>
    </Image>
    </View>

    <View style={{
      flexDirection:'row',
      justifyContent:'space-evenly',
      height:30,
      borderTopWidth:1,
      // marginTop:10
    }}>

    <Image 
    source = {require('./assets/home.png')}
    style={{
      width:25,
      height:25,
      marginTop:40,
      paddingLeft:10,
      paddingRight:10
    }}>

    </Image>
    <Image 
    source = {require('./assets/search.png')}
    style={{
      width:23,
      height:23,
      marginLeft:20,
      marginTop:40,
      paddingLeft:10,
      paddingRight:10
    }}>

    </Image>
    <Image 
    source = {require('./assets/add.png')}
    style={{
      width:23,
      height:23,
      marginLeft:20,
      marginTop:40,
      paddingLeft:10,
      paddingRight:10,
      
    }}>

    </Image>
    <Image 
    source = {require('./assets/like.png')}
    style={{
      width:23,
      height:23,
      marginLeft:20,
      marginTop:40,
      paddingLeft:10,
      paddingRight:10,
      
    }}>

    </Image>
    <Image 
    source = {require('./assets/ipin.jpg')}
    style={{
      width:27,
      height:27,
      marginLeft:35,
      marginTop:15,
      paddingLeft:15,
      paddingRight:15,
      
    }}>

    </Image>

    </View>
    </View>
  );
}



export default App;