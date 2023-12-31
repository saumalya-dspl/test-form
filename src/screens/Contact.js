import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';
import {Button} from 'react-native-paper';

const Contact = () => {
  const [agree, setAgree] = useState(false);

  return (
    <View>
      <View style={styles.mainContainer}>
        <Text style={styles.mainHeader}> Login Form </Text>
        <Text style={styles.description}>
          {' '}
          You can reach us via Sam.dspl@gmail.com{' '}
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Enter Your Name</Text>
          <TextInput
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Enter Your Password</Text>
          <TextInput
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.wrapper}>
          <CheckBox
            value={agree}
            onValueChange={() => setAgree(!agree)}
            color={agree ? '#4630EB' : undefined}
          />
          <Text style={styles.wrapperText}>
            I have read & agreed with the T&C
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {
              backgroundColor: agree ? '#4630EB' : 'grey',
            },
          ]}
          disabled={!agree}>
          <Button
            mode="contained"
            onPress={() => console.log('Pressed')}
            style={styles.buttonText}>
            Login
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  mainHeader: {
    fontSize: 25,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: 'capitalize',
    fontFamily: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#7d7d7d',
    paddingBottom: 20,
    lineHeight: 25,
    fontFamily: 'regular',
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: '#7d7d7d',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: 'regular',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: 'regular',
    fontSize: 18,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  wrapperText: {
    marginBottom: 20,
  },
});

export default Contact;
