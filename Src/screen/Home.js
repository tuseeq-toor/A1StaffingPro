/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {windowHeight, windowWidth} from '../utils/Dimentions';
import Theme from '../utils/Theme';
const Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#EDEDED',
      }}>
      <View style={{width: '100%', height: '15%', marginTop: 20}}>
        <Text
          style={{
            height: '50%',
            textAlignVertical: 'center',
            fontSize: 30,
            fontFamily: Theme.fontFamilyBold,
            fontWeight: '900',
            textAlign: 'center',
            color: Theme.blue,
          }}>
          A1 Staffing <Text style={{color: 'red'}}>PRO</Text> LLC
        </Text>
        {/* <Text style={{fontSize:30,fontFamily:Theme.fontFamilyBold,fontWeight:"900",textAlign:"center",color:Theme.blue,bottom:10}}>LLC</Text> */}
      </View>
      <Text
        style={{
          textAlign: 'center',
          marginTop: -20,
          color: Theme.blackColor,
          fontSize: 16,
          height: '10%',
        }}>
        CHOOSE THE BEST FROM THE BEST
      </Text>

      <View
        style={{width: '100%', height: '55%', justifyContent: 'space-around'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BusinessForm');
          }}
          style={{
            width: '60%',
            height: 60,
            backgroundColor: 'red',
            alignSelf: 'center',
            borderRadius: 5,
            top: 10,
            elevation: 2,
            shadowColor: 'red',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: Theme.whiteColor,
              height: '100%',
              textAlignVertical: 'center',
              fontSize: 16,
            }}>
            FOR BUSINESS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('JobseekerForm');
          }}
          style={{
            width: '60%',
            height: 60,
            backgroundColor: '#223060',
            alignSelf: 'center',
            borderRadius: 5,
            bottom: 40,
            elevation: 5,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: Theme.whiteColor,
              height: '100%',
              textAlignVertical: 'center',
              fontSize: 16,
            }}>
            FOR JOB SEEKERS
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
