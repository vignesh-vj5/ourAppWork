import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Splash from './screens/Splash';
import WasteNo from '../src/screens/WasteNo';


performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }
  



class AppR extends Component {
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
          setTimeout(
            () => { resolve('result') },
            2000
          )
        )
      }
    
  constructor(props) {
    super(props);
    this.state = { isLoading : true };
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
  
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }


 
  render() {
    if (this.state.isLoading) {
        return <Splash />;
      }
    return (
     <WasteNo/>
    );
  }
}

export default AppR;
