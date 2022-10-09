/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {windowHeight} from '../utils/Dimentions';
import {windowWidth} from '../utils/Dimentions';
import Theme from '../utils/Theme';
import {Dropdown} from 'react-native-element-dropdown';
import CheckBox from '@react-native-community/checkbox';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import Modals from '../components/Modal';
import RNFetchBlob from 'rn-fetch-blob';
const BusinessForm = () => {
  const [PositionHiringFir, setPositionHiringFir] = useState('');
  const [loc, setloc] = useState('');
  const [PositionType, setPositionType] = useState('');
  const [name, setName] = useState('');
  const [BusinessEmail, setBusinessEmail] = useState('');
  const [BusinessPhone, setBusinessPhone] = useState('');
  const [CompanyName, setCompanyName] = useState('');
  const [CompanySecters, setCompanySecters] = useState('');
  const [yourRole, setYourRole] = useState('');
  const [selectBase64, setselectBase64] = useState('');
  const [selectedDocName, setSelectedDocName] = useState('');
  const [isSubmitting, setisSubmitting] = useState(false);
  const [remotePosition, setremotePosition] = useState(false);
  const [isVisibleModal, setisVisibleModal] = useState(false);

  const [isFocus, setIsFocus] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const data = [
    {label: 'Permanent Hire', value: 'Permanent Hire'},
    {label: 'Contract Hire', value: 'Contract Hire'},
    {label: 'Project Base', value: 'Project Base'},
    {label: 'Temporary Hire', value: 'Temporary Hire'},
  ];

  const data2 = [
    {label: 'Admin support', value: 'Admin support'},
    {label: 'Finance / Accounting', value: 'Finance / Accounting'},
    {label: 'Human Resource Management', value: 'Human Resource Management'},
    {label: 'IT Jobs', value: 'IT Jobs'},
    {label: 'Other', value: 'other'},
  ];

  const chooseFile = async () => {
    DocumentPicker.pick().then(async res => {
      console.log(res[0].uri);
      RNFetchBlob.fs.readFile(res[0].uri, 'base64').then(data => {
        const dataUri = `data:${res[0].type};base64,${data}`;
        console.log(`data:${res[0].type};base64,${data}`);
        setselectBase64(dataUri);
        setSelectedDocName(res[0].name);
      });
    });
  };

  const submitForm = async () => {
    if (
      name == '' &&
      BusinessEmail == '' &&
      BusinessPhone == '' &&
      CompanyName == '' &&
      CompanySecters == '' &&
      yourRole == '' &&
      selectBase64 == '' &&
      PositionHiringFir == '' &&
      loc == '' &&
      PositionType == ''
    ) {
      Alert.alert('Information Required', 'Please fill in all the details.');
    } else {
      const ownerObject = {
        jobPosition: PositionHiringFir,
        jobLocation: loc,
        positionType: PositionType,
        isRemote: remotePosition,
        OwnerName: name,
        OwnerEmail: BusinessEmail,
        OwnerPhone: BusinessPhone,
        CompanyName: CompanyName,
        CompanySectors: CompanySecters,
        OwnerRole: yourRole,
        attachmentUri: selectBase64,
      };
      setisSubmitting(true);
      console.log(ownerObject);
      axios
        .post(
          'https://agile-river-27056.herokuapp.com/send-owner-mail',
          ownerObject,
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
    <View style={{width: windowWidth, flex: 1}}>
      <ScrollView>
        <Text
          style={{
            fontSize: 30,
            width: '100%',
            textAlign: 'center',
            color: Theme.blackColor,
            fontWeight: '700',
            marginTop: 5,
          }}>
          FOR BUSSINESS OWNER
        </Text>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            borderBottomWidth: 0.6,
            marginTop: 5,
          }}
        />
        <Text
          style={{
            fontSize: 25,
            width: '100%',
            textAlign: 'center',
            color: Theme.blackColor,
            fontWeight: '500',
            marginTop: 20,
          }}>
          About the position
        </Text>

        <TextInput
          placeholder="Position Hiring For"
          onChangeText={e => setPositionHiringFir(e)}
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
          placeholder="Work Location"
          onChangeText={e => setloc(e)}
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

        <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
          <Dropdown
            itemTextStyle={{color: Theme.blackColor}}
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Position Type'}
            searchPlaceholder="Search..."
            value={PositionType}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setPositionType(item?.value);

              setIsFocus(false);
            }}
          />
        </View>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 20,
            flexDirection: 'row',
          }}>
          <CheckBox
            disabled={false}
            value={remotePosition}
            onValueChange={newValue => setremotePosition(!remotePosition)}
          />
          <Text
            style={{
              height: '100%',
              textAlignVertical: 'center',
              color: Theme.blackColor,
            }}>
            Remote Position
          </Text>
        </View>

        <TouchableOpacity
          onPress={chooseFile}
          style={{
            width: '90%',
            height: 40,
            borderWidth: 1,
            marginTop: 20,
            borderRadius: 5,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              textAlignVertical: 'center',
              color: Theme.blackColor,
              alignSelf: 'center',
              fontSize: 18,
              height: '100%',
            }}>
            Upload Related Document
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            textAlignVertical: 'center',
            color: Theme.blackColor,
            fontSize: 14,
            left: 20,
          }}>
          {selectedDocName}
        </Text>

        <Text
          style={{
            fontSize: 25,
            width: '100%',
            textAlign: 'center',
            color: Theme.blackColor,
            fontWeight: '500',
            marginTop: 15,
          }}>
          Contact Information
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
          }}
        />

        <TextInput
          placeholder="Business Email"
          onChangeText={e => setBusinessEmail(e)}
          placeholderTextColor={Theme.blackColor}
          style={{
            width: '90%',
            borderWidth: 0.5,
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 5,
          }}
        />

        <TextInput
          placeholder="Business Phone"
          onChangeText={e => setBusinessPhone(e)}
          placeholderTextColor={Theme.blackColor}
          style={{
            width: '90%',
            borderWidth: 0.5,
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 5,
          }}
        />

        <TextInput
          placeholder="Company Name"
          onChangeText={e => setCompanyName(e)}
          placeholderTextColor={Theme.blackColor}
          style={{
            width: '90%',
            borderWidth: 0.5,
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 5,
          }}
        />

        <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
          <Dropdown
            itemTextStyle={{color: Theme.blackColor}}
            itemContainerStyle={{backgroundColor: 'white'}}
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data2}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Company Sectors'}
            searchPlaceholder="Search..."
            value={CompanySecters}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setCompanySecters(item?.value);
              setIsFocus(false);
            }}
          />
        </View>

        <TextInput
          placeholder="Your Role"
          onChangeText={e => setYourRole(e)}
          placeholderTextColor={Theme.blackColor}
          style={{
            width: '90%',
            borderWidth: 0.5,
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 5,
          }}
        />

        <TouchableOpacity
          onPress={submitForm}
          style={{
            width: '90%',
            left: 20,
            height: 50,
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
      </ScrollView>
      <Modals
        isVisible={isVisibleModal}
        onClose={() => setisVisibleModal(false)}
      />
    </View>
  );
};

export default BusinessForm;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: Theme.blackColor,
  },
  placeholderStyle: {
    fontSize: 16,
    color: Theme.blackColor,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Theme.blackColor,
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: Theme.blackColor,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: Theme.blackColor,
  },
});
