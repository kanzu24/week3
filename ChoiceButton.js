import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CHOICES from '../choices'

export default function ChoiceButton (props) {
    return(
         <View>
             {
                 CHOICES.map(choice => {
                     return(
                        <TouchableOpacity style={styles.buttonStyle} key={choice.name} onPress={() => props(choice.name)} >
                           <Text style={styles.buttonText}>{choice.name}</Text>
                        </TouchableOpacity> 
                     )
                 })
             }
         </View>  
    )
};


const styles = StyleSheet.create({
    buttonStyle: {
        width: 200,
        margin: 10,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#640D14',
      },
      buttonText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
      },
});