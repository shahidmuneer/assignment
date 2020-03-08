import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
//import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
//import Button from "../components/Button";
import { logoutUser } from "../api/auth-api";

import {StatusBar,Text} from 'react-native';
import Assignments from './Tabs/assignments';
import Requests from './Tabs/request';
import Quework from './Tabs/quework'
import { Container, Header, Left, Body, Right, Button, Icon,Tabs,Tab, Title, Content } from 'native-base';
const Dashboard = () => (
  <Container >
    <StatusBar backgroundColor='#ffffff' />
  <Header hasTabs  style={{backgroundColor:'#ffffff',marginTop:20,borderBottomWidth:0,marginBottom:0}}>
    <Left>
      <Button transparent>
        <Icon style={{color:'black'}} name='menu' />
      </Button>
    </Left>
    <Body>
      <Text>APC</Text>
    </Body>
    <Right>
      <Button transparent>
        <Icon style={{color:'black'}} name='search' />
      </Button>
      <Button transparent>
        <Icon style={{color:'black'}} name='more' />
      </Button>
      
    </Right>
  </Header>
  <Tabs  tabBarUnderlineStyle={{backgroundColor:'red'}}>
          <Tab tabStyle={{backgroundColor:'#ffffff'}} textStyle={{color:'black'}} activeTabStyle={{backgroundColor:'#ffffff'}} activeTextStyle={{color:'red'}} heading="ASSIGNMENTS">
            <Assignments />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#ffffff'}} textStyle={{color:'black'}} activeTabStyle={{backgroundColor:'#ffffff'}} activeTextStyle={{color:'red'}} heading="REQUESTS">
            <Requests />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#ffffff'}} textStyle={{color:'black'}} activeTabStyle={{backgroundColor:'#ffffff'}} activeTextStyle={{color:'red'}} heading="WORK IN QUE">
            <Quework />
          </Tab>
        </Tabs>
</Container>
);
{/* <Button mode="outlined" onPress={() => logoutUser()}>
      Logout
    </Button> */}
export default memo(Dashboard);
