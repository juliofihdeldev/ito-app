import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'App/App';
import AlphaNotice from '../components/AlphaNotice';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  cancel: {
    position: 'absolute',
    left: 12,
    top: 12,
  },
  chevronLeftIcon: {},
  logoWrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
  },
  alphaNoticeRoot: {
    position: 'absolute',
    top: 12,
    left: 48,
    padding: 0,
  },
  alphaNoticeText: {
    fontSize: 14,
    lineHeight: 14,
  },
  logo: {
    color: '#7dc6b6',
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Righteous-Regular',
    marginBottom: 16,
  },
  header: {
    fontSize: 18,
    padding: 5,
    paddingTop: 64,
    paddingBottom: 50,
    color: '#595959',
    fontFamily: 'Ubuntu-R',
    lineHeight: 26,
  },
  arrowRightIcon: {
    right: 16,
    top: 16,
    fontSize: 20,
    color: '#2c2c2c',
    position: 'absolute',
  },
  buttonSymptoms: {
    borderRadius: 8,
    backgroundColor: '#91e6d3',
    padding: 20,
    marginBottom: 32,
    fontFamily: 'Ubuntu-R',
  },
  buttonSymptomsTitle: {
    color: '#2c2c2c',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    fontSize: 14,
    marginBottom: 8,
    fontFamily: 'Ubuntu-M',
    justifyContent: 'space-between',
  },
  buttonTested: {
    borderRadius: 8,
    backgroundColor: '#91e6d3',
    padding: 20,
    fontFamily: 'Ubuntu-R',
  },
  buttonTestedTitle: {
    color: '#2c2c2c',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    fontSize: 14,
    marginBottom: 8,
    fontFamily: 'Ubuntu-M',
  },
});

type EndangermentScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Endangerment'
>;

export function Endangerment({
  navigation,
}: {
  navigation: EndangermentScreenNavigationProp;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.cancel}>
        <Text onPress={() => navigation.navigate('HomeBluetooth')}>
          <Icon name="chevron-left" size={18} style={styles.chevronLeftIcon} />{' '}
          cancel
        </Text>
      </View>
      <View style={styles.logoWrapper}>
        <Text style={styles.logo}>ito</Text>
        <AlphaNotice
          rootStyle={styles.alphaNoticeRoot}
          textStyle={styles.alphaNoticeText}
        />
      </View>
      <Text style={styles.header}>
        Tell us if you have symptoms or if you{'\n'}
        have a positive test result
      </Text>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('SymptomInfo')}>
        <View style={styles.buttonSymptoms}>
          <Text style={styles.buttonSymptomsTitle}>
            I have typical symptoms
          </Text>
          <Icon name="arrow-right" size={18} style={styles.arrowRightIcon} />
          <Text>
            Don't worry!{'\n'}
            We will help you figure out what to do next.
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('AlphaPositiveResult')}>
        <View style={styles.buttonTested}>
          <Text style={styles.buttonTestedTitle}>I have a positive result</Text>
          <Icon name="arrow-right" size={18} style={styles.arrowRightIcon} />
          <Text>
            If you got a positive result from your doctor or authorities please
            let us know to help everybody else stay healthy.
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Endangerment;
