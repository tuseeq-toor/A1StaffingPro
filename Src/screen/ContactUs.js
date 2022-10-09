import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {windowWidth} from '../utils/Dimentions';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import A1logo from '../assets/A1logo.png';
import Theme from '../utils/Theme';
const ContactUs = () => {
  return (
    <View
      style={{flex: 1, width: windowWidth, backgroundColor: Theme.whiteColor}}>
      <ScrollView>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            fontWeight: '900',
            color: Theme.blackColor,
            marginTop: 30,
          }}>
          Contact Us
        </Text>

        <TextInput
          placeholder="Your Name"
          placeholderTextColor={Theme.blackColor}
          style={{
            width: '90%',
            borderWidth: 0.5,
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 5,
            color: Theme.blackColor,
          }}
        />

        <TextInput
          placeholder="Your Email"
          placeholderTextColor={Theme.blackColor}
          style={{
            width: '90%',
            borderWidth: 0.5,
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 5,
            color: Theme.blackColor,
          }}
        />

        <TextInput
          placeholder="Your Phone Number"
          placeholderTextColor={Theme.blackColor}
          style={{
            width: '90%',
            borderWidth: 0.5,
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 5,
            color: Theme.blackColor,
          }}
        />

        <TextInput
          placeholder="Subject"
          placeholderTextColor={Theme.blackColor}
          style={{
            width: '90%',
            borderWidth: 0.5,
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 5,
            color: Theme.blackColor,
          }}
        />

        <TextInput
          placeholder="Message"
          numberOfLines={10}
          placeholderTextColor={Theme.blackColor}
          style={{
            width: '90%',
            borderWidth: 0.5,
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 5,
            color: Theme.blackColor,
          }}
        />

        <TouchableOpacity
          style={{
            width: '35%',
            height: 50,
            left: 40,
            marginTop: 20,
            borderRadius: 5,
            backgroundColor: 'red',
            marginBottom: 20,
          }}>
          <Text
            style={{
              textAlignVertical: 'center',
              color: Theme.whiteColor,
              alignSelf: 'center',
              fontSize: 18,
              height: '100%',
            }}>
            Submit
          </Text>
        </TouchableOpacity>

        <View
          style={{
            width: '95%',
            height: 800,
            backgroundColor: '#2C3A81',
            alignSelf: 'center',
          }}>
          <Image
            style={{
              width: '95%',
              height: '15%',
              resizeMode: 'center',
              backgroundColor: Theme.whiteColor,
              marginTop: 20,
              alignSelf: 'center',
              borderRadius: 10,
            }}
            source={A1logo}
          />

          <Text
            style={{
              width: '95%',
              textAlign: 'justify',
              color: 'white',
              marginTop: 20,
              alignSelf: 'center',
            }}>
            We are a staffing firm built for the needs today’s job market.
            Whether you need to find top talent or your next great job
            opportunity, A1 Staffing Pro LLC is here to be the bridge for
            success.
          </Text>
          <Text
            style={{
              width: '95%',
              textAlign: 'justify',
              color: 'white',
              marginTop: 20,
              alignSelf: 'center',
              fontSize: 25,
            }}>
            Contact Us
          </Text>

          <View style={styles.ContactView}>
            <Image
              source={{
                uri: 'https://cdn0.iconfinder.com/data/icons/travel-glyph-4/32/google_direction_locate-512.png',
              }}
              style={styles.ContactImg}
            />
            <Text style={styles.ContactText}>New Jersey, USA</Text>
          </View>

          <View style={styles.ContactView}>
            <Image
              source={{
                uri: 'https://cdn1.iconfinder.com/data/icons/business-and-management-71/32/envelope-1024.png',
              }}
              style={styles.ContactImg}
            />
            <Text style={styles.ContactText}> info@a1staffingpro.com</Text>
          </View>

          <View style={styles.ContactView}>
            <Image
              source={{
                uri: 'https://th.bing.com/th/id/R.8bcd8905952d764095286548d38d3c6f?rik=AcQt5PbH0AjPvw&pid=ImgRaw&r=0',
              }}
              style={styles.ContactImg}
            />
            <Text style={styles.ContactText}> 646 419 8100</Text>
          </View>
          <View style={styles.ContactView}>
            <Image
              source={{
                uri: 'https://th.bing.com/th/id/R.8bcd8905952d764095286548d38d3c6f?rik=AcQt5PbH0AjPvw&pid=ImgRaw&r=0',
              }}
              style={styles.ContactImg}
            />
            <Text style={styles.ContactText}> 973 282 1114</Text>
          </View>

          <Text
            style={{
              width: '95%',
              textAlign: 'justify',
              color: 'white',
              marginTop: 20,
              alignSelf: 'center',
              fontSize: 25,
            }}>
            Open Hours
          </Text>
          <Text style={styles.OpenHourText}>Monday - Friday:</Text>
          <Text style={styles.OpenHourText}>09:00 am - 6:00 pm</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ContactUs;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  ContactView: {
    width: '95%',
    height: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  ContactImg: {
    width: '15%',
    height: '50%',
    resizeMode: 'center',
    tintColor: 'white',
    alignSelf: 'center',
  },
  ContactText: {
    color: 'white',
    width: '80%',
    height: '100%',
    textAlignVertical: 'center',
  },
  OpenHourText: {
    width: '95%',
    textAlign: 'justify',
    color: 'white',
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 18,
  },
});
