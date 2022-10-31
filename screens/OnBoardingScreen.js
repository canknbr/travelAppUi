import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets//onboardImage.jpg')}
        style={styles.bgImage}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to the App</Text>
          <Text style={{...styles.title, marginTop: 6}}>Let's discover</Text>
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            maxime perspiciatis exercitationem iusto provident eius modi iure
            nulla. Laboriosam non amet culpa accusamus voluptatum enim magni
            eligendi nulla nesciunt voluptatem!
          </Text>
          <Pressable
            onPress={() => navigation.navigate('HomeScreen')}
            style={styles.btn}>
            <Text style={styles.textBtn}>Get Started</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
  container: {
    height: '50%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    marginTop: 20,
    lineHeight: 25,
  },
  btn: {
    backgroundColor: 'white',
    width: 150,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textBtn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.8)',
  },
});
export default OnBoardingScreen;
