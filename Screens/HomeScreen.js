import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Image } from 'react-native'
import NavOptions from '../Components/NavOptions'
import NavFavourites from '../Components/NavFavourites'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { setOrigin } from '../redux/slices/navSlice'
import { useDispatch } from 'react-redux'
import { TouchableOpacity } from 'react-native'
import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch()
  
  return (
    <SafeAreaView className='bg-white h-full' >
    <View className='p-5'>
    <View className='flex-row justify-between items-center'>
      <Image
        source={require("../assets/profile.png")}
        style={{
          width: 100,
          height: 100,
          resizeMode: "contain",
        }}
      />
      <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
      <Image
        source={require("../assets/avatar.jpeg")} style={{width:100,height:80,resizeMode:'contain'}}
          
        />
        </TouchableOpacity>
      </View>
      <GooglePlacesAutocomplete 
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
        placeholder='where From?'
        minLength={2}
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize:18,
          },
        }}
        onPress={(data, details = null) => {
          dispatch(setOrigin({
            location: details.geometry.location,
            description: data.description
          }))
        }}
     
        
        fetchDetails={true}
        returnkeytype='search'
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en',
        }}
        enablePoweredByContainer={false}
      />
   
      <NavOptions/>
      <NavFavourites/>

        </View>

       </SafeAreaView>

  )
}

export default HomeScreen

const styles = StyleSheet.create({})