import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-elements';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text h1 style={styles.title}>
        로그인
      </Text>
      <Button
        title="로그인"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 30,
    color: '#2089dc', // react-native-elements의 기본 primary 색상
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#2089dc',
  },
});

export default LoginScreen;
