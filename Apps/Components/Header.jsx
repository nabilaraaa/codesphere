import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { client } from '../Utils/KindConfig'
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {

    const [userDetail,setUserDetail]=useState();
    useEffect(()=>{
        getUserDetails();
    },[])
    const getUserDetails=async()=>{
        const user=await client.getUserDetails();
        setUserDetail(user)
    }
  return (
    <>
    <View style={{display:'flex', flexDirection:'row',gap:5,alignItems:'center'}}>
      <image source={{uri:userDetail?.picture}}
      style={{width:45,height:45,borderRadius:99}}
      />
      <View>
        <Text style={{fontSize:18}}>Welcome,</Text>
        <Text style={{fontSize:20,
        fontWeight:'bold',color:Colors.PRIMARY}}>Hello {userDetail?.given_name}</Text>
      </View>
    </View>
    <View style={styles.input}>
    <Ionicons name="search" size={24} color="black" />
      <TextInput placeholder='Search'/>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  input:{
    backgroundColor:Colors.WHITE,
    padding:10,
    borderRadius:99,
    paddingHorizontal:20,
    marginTop:20,
    display:'flex',
    flexDirection:'row',
    gap:7,
    alignItems:'center'
  }
})