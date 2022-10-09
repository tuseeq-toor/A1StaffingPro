/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import Theme from '../utils/Theme';
import windowWidth from '../utils/Dimentions';
import windowHeight from '../utils/Dimentions';
import About from '../assets/About.jpg';
const AboutUs = () => {
  return (
    <View style={{width: windowWidth, flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            width: '100%',
            textAlign: 'center',
            fontSize: 28,
            top: 20,
            color: Theme.blackColor,
            fontWeight: '800',
          }}>
          About A1 Staffing Pro LLC
        </Text>

        <Text
          style={{
            width: '90%',
            textAlign: 'justify',
            alignSelf: 'center',
            marginTop: 50,
            fontSize: 17,
            color: Theme.blackColor,
          }}>
          Welcome to A1 Staffing Pro LLC. We are a staffing firm built for the
          needs and today’s job market. Whether you need to find top talent or
          your next great job opportunity, A1 Staffing Pro LLC is here to be the
          bridge for success. We specialize in connecting opportunities at great
          companies with highly skilled job seekers. Our leadership team
          provides staffing, direct hire, contract to hire and customized
          staffing solutions. Our knowledgeable staff works as a team to provide
          service and we are dedicated to our clients and applicants.
        </Text>
        <Image
          source={{
            uri: 'https://www.a1staffingpro.com/img/about/home-about.jpg',
          }}
          style={{
            width: '90%',
            height: 200,
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 5,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            color: Theme.blackColor,
            fontWeight: '900',
            width: '90%',
            alignSelf: 'center',
            marginTop: 30,
          }}>
          For Business
        </Text>
        <Text
          style={{
            width: '90%',
            textAlign: 'justify',
            alignSelf: 'center',
            marginTop: 20,
            fontSize: 17,
            color: Theme.blackColor,
          }}>
          Skills are important when it comes to finding your next “superstar”,
          but so is personality. We at A1 Staffing Pro LLC believe that great
          companies start with exceptional teams. We offer a refined approach to
          job recruitment through our thorough vetting process which includes
          interviews to evaluate both hard and soft skill sets, as well as
          personality traits that will best match our clients’ teams.
        </Text>
        <Text
          style={{
            width: '90%',
            textAlign: 'justify',
            alignSelf: 'center',
            marginTop: 10,
            fontSize: 18,
            color: Theme.blackColor,
          }}>
          In addition, candidates also undergo background screening and
          references. We can provide the solutions that will be the most cost
          effective in solving your specific hiring needs. As a result, we can
          make your hiring decisions easier by projecting how our candidates
          will meet your company’s objectives. A1 staffing Pro is created for
          your unique requirements. At Staffing Pro LLC, We “Choose the Best
          from the Best” .
        </Text>

        <Text
          style={{
            fontSize: 20,
            color: Theme.blackColor,
            fontWeight: '900',
            width: '90%',
            alignSelf: 'center',
            marginTop: 30,
          }}>
          For Job Seekers
        </Text>
        <Text
          style={{
            width: '90%',
            textAlign: 'justify',
            alignSelf: 'center',
            marginTop: 20,
            fontSize: 17,
            color: Theme.blackColor,
          }}>
          Find the job that works for you. At A1 staffing Pro LLC, we understand
          the unique challenges of the New Jersey and New York job market and
          its hiring environment and can help you find the right fit.
        </Text>

        <Text
          style={{
            width: '90%',
            textAlign: 'justify',
            alignSelf: 'center',
            marginTop: 10,
            fontSize: 17,
            color: Theme.blackColor,
          }}>
          Our staffing experts provide personalized service and matching
          technologies that incorporate data to connect you with the right
          temporary or full-time position. Companies of all sizes look to A1
          Staffing for their business needs. We are hiring both experienced as
          well as new candidates who are looking for jobs in:
        </Text>
        <View style={{width: windowWidth, flex: 1, marginLeft: 10}}>
          <Text
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 10,
              fontSize: 16,
              color: Theme.blackColor,
            }}>
            {'\u2022'} Administrative Support
          </Text>

          <Text
            style={{
              width: '90%',
              alignSelf: 'center',
              fontSize: 16,
              color: Theme.blackColor,
            }}>
            {'\u2022'} Finance/Accounting
          </Text>

          <Text
            style={{
              width: '90%',
              alignSelf: 'center',
              fontSize: 16,
              color: Theme.blackColor,
            }}>
            {'\u2022'} Human Resource Management
          </Text>

          <Text
            style={{
              width: '90%',
              alignSelf: 'center',
              fontSize: 16,
              color: Theme.blackColor,
            }}>
            {'\u2022'} Healthcare
          </Text>

          <Text
            style={{
              width: '90%',
              alignSelf: 'center',
              fontSize: 16,
              color: Theme.blackColor,
            }}>
            {'\u2022'} IT
          </Text>
        </View>
        <View style={{height: 30}}></View>
      </ScrollView>
    </View>
  );
};

export default AboutUs;
