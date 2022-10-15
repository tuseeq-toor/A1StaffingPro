import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import {windowWidth} from '../utils/Dimentions';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import A1logo from '../assets/A1logo.png';
import Theme from '../utils/Theme';
import axios from 'axios';
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setisSubmitting] = useState(false);

  const submitForm = async () => {
    if (
      name === '' &&
      email === '' &&
      phone === '' &&
      subject === '' &&
      message === ''
    ) {
      Alert.alert('Information Required', 'Please fill in all the details.');
    } else {
      const contactObject = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
      };
      setisSubmitting(true);
      console.log(contactObject);
      axios
        .post(
          'https://agile-river-27056.herokuapp.com/send-contact-mail',
          contactObject,
        )
        .then(function (response) {
          if (response.data.success == true) {
            setisSubmitting(false);
            Alert.alert(
              'Request Sent',
              "Your request has been received. We'll contact you soon.",
            );
          }
          console.log(response.data, 'data');
        })
        .catch(function (error) {
          console.log(error);
          Alert.alert('Something Went Wrong!', 'Please try again later');
        });
    }
  };

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
          onChangeText={e => setName(e)}
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
          onChangeText={e => setEmail(e)}
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
          onChangeText={e => setPhone(e)}
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
          onChangeText={e => setSubject(e)}
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
          onChangeText={e => setMessage(e)}
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
          onPress={submitForm}
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
            {isSubmitting ? 'Submitting...' : 'Submit'}
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
