import React, { Component } from 'react';
import { SafeAreaView,StyleSheet, Image,Dimensions } from 'react-native';
import imageIndex from '../images/imageIndex';


const Splash = () =>{
    return(
            <SafeAreaView style={styles.container}>
              <Image source={imageIndex.splashScreen.second} style={styles.im} ></Image>
            </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    container:{flex:1,backgroundColor:'#ebdc7c',justifyContent:'center',alignItems:'center'},
    im:{marginLeft:5}
});

export default Splash


//backgroundColor:'#263a4d',