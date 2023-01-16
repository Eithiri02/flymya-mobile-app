import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

//images
import LogoIcon from "../../assets/flymya_logo.png";
import FlagIcon from "../../assets/flag.png";
import ProfileIcon from "../../assets/profile.png";


const Navigation = () => {
   return (
      <View style={styles.container}>
         <View style={styles.logo_image_position}>
            <TouchableOpacity>
               <Image source={LogoIcon} style={styles.logo_image} />
            </TouchableOpacity>
         </View>
         <TouchableOpacity>
            <Image source={FlagIcon} style={styles.image} />
         </TouchableOpacity>
         <TouchableOpacity>
            <Image source={ProfileIcon} style={styles.image} />
         </TouchableOpacity>


      </View>
   )
}

export default Navigation;

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 15,
      marginBottom: 20,
      height: 20,
   },
   logo_image_position: {
      minWidth: "60%"
   },
   logo_image: {
      width: 100,
      height: 30
   },
   image: {
      width: 40,
      height: 35
   }
})