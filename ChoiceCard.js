import React from 'react'
import { View, Text } from 'react-native'

export default function ChoiceCard(props) {
    return (
        <View style={styles.choiceContainer}>
            <Text style={styles.choiceDescription}>2121</Text>
            <Text style={styles.ChoiceCard}> sfd </Text>
            <Text style={styles.choiceImage}>dfds </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    choiceContainer: {
        flex: 1,
        alignItems: 'center',
      },
      choiceDescription: {
        fontSize: 25,
        color: '#250902',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
      },
      choiceCardTitle: {
        fontSize: 30,
        color: '#250902'
      },
      choiceImage: {
        width: 150,
        height: 150,
        padding: 10,
      },
});