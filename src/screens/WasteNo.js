import React from 'react';
import { Image,StyleSheet } from 'react-native';
import {Container,Header,Content,} from 'native-base';
import imageIndex from '../images/imageIndex';

const WasteNo = () => {
   return(
            <Container>
            
                <Content><Image source = {imageIndex.splashScreen.headpic} style={styles.picSty}/></Content>
                    
            

            </Container>

   )
}

export default WasteNo;

const styles = StyleSheet.create({
    headpic:{marginTop:9},
    picSty:{marginTop:2}
});