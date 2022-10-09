/* eslint-disable prettier/prettier */
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

const JobseekerForm = () => {
  const [jobRole, setjobRole] = useState('');
  const [jobQualification, setQualification] = useState('');
  const [isVisibleModal, setisVisibleModal] = useState(false);

  const [fresher, setFresher] = useState('');
  const [loc, setloc] = useState('');
  const [PositionType, setPositionType] = useState('');
  const [name, setName] = useState('');
  const [BusinessEmail, setBusinessEmail] = useState('');
  const [BusinessPhone, setBusinessPhone] = useState('');
  const [CompanyName, setCompanyName] = useState('');
  const [CompanySecters, setCompanySecters] = useState('');
  const [yourRole, setYourRole] = useState('');
  const [Doc, setDoc] = useState('');
  const [remotePosition, setremotePosition] = useState(false);
  const [gender, setGender] = useState('');
  const [DOB, setDOB] = useState('');
  const [selectDocname, setselectDocname] = useState('');
  const [selectBase64, setselectBase64] = useState('');
  const [isSubmitting, setisSubmitting] = useState(false);

  const [value, setValue] = useState(null);
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

  const dataGender = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'Other', value: 'Other'},
  ];

  const dataJobType = [
    {label: 'Management', value: 'Management'},
    {label: 'Sales', value: 'Sales'},
    {label: 'Marketing', value: 'Marketing'},
    {label: 'Customer Service', value: 'Customer Service'},
    {label: 'Help Desk Roles', value: 'Help Desk Roles'},
    {label: 'Desktop Support Roles', value: 'Desktop Support Roles'},
    {label: 'Admin Roles', value: 'Help Desk Roles'},
  ];

  const chooseFile = async () => {
    DocumentPicker.pick().then(async res => {
      console.log(res[0].uri);
      RNFetchBlob.fs.readFile(res[0].uri, 'base64').then(data => {
        const dataUri = `data:${res[0].type};base64,${data}`;
        console.log(`data:${res[0].type};base64,${data}`);
        setselectBase64(dataUri);
        setselectDocname(res[0].name);
      });
    });
  };

  const submitForm = async () => {
    if (BusinessEmail == '') {
      Alert.alert('Email is Required', 'Please  enter your email');
    } else {
      var config = {
        method: 'post',
        url: 'https://agile-river-27056.herokuapp.com/send-jobseeker-mail',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: BusinessEmail,
          attachmentUri: selectBase64,
        },
      };
      setisSubmitting(true);
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data), 'ressssssss');
          Alert.alert(
            'Request Sent',
            "Your request has been received. We'll contact you soon.",
          );
          setisSubmitting(false);
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
            fontWeight: '900',
            marginTop: 5,
          }}>
          FOR JOB SEEKERS
        </Text>
        {/* <Text style={{fontSize:25,width:"100%",textAlign:"center",color:Theme.blackColor,fontWeight:"500",marginTop:15}}>Qualification</Text> */}
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            borderBottomWidth: 0.6,
            marginTop: 10,
          }}
        />

        {/* <Text style={{fontSize:25,width:"100%",textAlign:"center",color:Theme.blackColor,fontWeight:"500",marginTop:30}}>Contact Information</Text> */}
        {/* <View style={{width:"90%",alignSelf:"center",borderBottomWidth:0.6,marginTop:10}}  /> */}

        {/* <TextInput placeholder='Your Name'
onChangeText={(e)=>setName(e)}
      placeholderTextColor={Theme.blackColor}
      style={{width:"90%",borderWidth:0.5,alignSelf:"center",marginTop:20,borderRadius:5}}/> */}

        <TextInput
          placeholder="Enter your email"
          onChangeText={e => setBusinessEmail(e)}
          placeholderTextColor={Theme.blackColor}
          style={{
            width: '90%',
            borderWidth: 1,
            alignSelf: 'center',
            marginTop: 70,
            borderRadius: 5,
          }}
        />

        {/* <View style={{width:"90%",alignSelf:"center",marginTop:20}} >
      <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={"Your Qualification"}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setQualification(item?.value)
            setIsFocus(false);
          }}
          itemTextStyle={{color:Theme.blackColor}}

          /></View>
<View style={{width:"90%",alignSelf:"center",marginTop:20}} >
      <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={"Fresher"}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setFresher(item?.value)
            setIsFocus(false);
          }}
          itemTextStyle={{color:Theme.blackColor}}

          /></View> */}

        {/* <View style={{width:"90%",alignSelf:"center",marginTop:20}} >
      <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={"Company Sectors"}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setIsFocus(false);
            setCompanySecters(item?.value)
          }}
          itemTextStyle={{color:Theme.blackColor}}

          /></View> */}
        {/* 
<View style={{width:"90%",alignSelf:"center",marginTop:20}} >
      <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dataJobType}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={"Job Type"}
          searchPlaceholder="Search..."
          value={PositionType}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setPositionType(item.value)
            setIsFocus(false);
          }}
          itemTextStyle={{color:Theme.blackColor}}

          /></View> */}

        {/* <View style={{width:"90%",alignSelf:"center",marginTop:20,flexDirection:"row"}}> */}
        {/* <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) =>setremotePosition(!remotePosition)}
  />
  <Text style={{height:"100%",textAlignVertical:"center",color:Theme.blackColor}}>Remote Position</Text>
          </View>
  <Text style={{textAlignVertical:"center",color:Theme.blackColor,width:"90%",alignSelf:"center",fontSize:20,marginTop:20}}>Job Details</Text> */}

        <TouchableOpacity
          onPress={chooseFile}
          style={{
            width: '90%',
            height: 50,
            borderWidth: 1,
            marginTop: 50,
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
            Upload Your Resume
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            textAlignVertical: 'center',
            color: Theme.blackColor,
            fontSize: 14,
            left: 20,
          }}>
          {selectDocname}
        </Text>

        {/* 
<TextInput placeholder='Your Phone'
onChangeText={(e)=>setBusinessPhone(e)}

      placeholderTextColor={Theme.blackColor}
      style={{width:"90%",borderWidth:0.5,alignSelf:"center",marginTop:20,borderRadius:5}}/>

<TextInput placeholder='Your Address'
onChangeText={(e)=>setloc(e)}

      placeholderTextColor={Theme.blackColor}
      style={{width:"90%",borderWidth:0.5,alignSelf:"center",marginTop:20,borderRadius:5}}/> */}

        {/* <View style={{width:"90%",alignSelf:"center",marginTop:20}} >
      <Dropdown
          itemTextStyle={{color:Theme.blackColor}}

          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dataGender}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={"Select Your Gender"}
          searchPlaceholder="Search..."
          value={gender}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setGender(item?.value)
            setIsFocus(false);
          }}
          /></View>

<TextInput placeholder='Date Of Birth'
           onChangeText={(e)=>setDOB(e)}

      placeholderTextColor={Theme.blackColor}
      style={{width:"90%",borderWidth:0.5,alignSelf:"center",marginTop:20,borderRadius:5}}/> */}

        <TouchableOpacity
          onPress={submitForm}
          style={{
            width: '90%',
            height: 50,
            marginTop: 50,
            borderRadius: 5,
            left: 20,
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

export default JobseekerForm;
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
