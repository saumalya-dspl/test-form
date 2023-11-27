import React from 'react';
import {View, ImageBackground} from 'react-native';

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/gradient.jpeg')}
        style={{
          height: '100%',
          paddingHorizontal: 30,
          paddingTop: 30,
          backgroundColor: '#fff',
        }}
      />
      <View style={{position: 'absolute'}}>{children}</View>
    </View>
  );
};

export default Background;
