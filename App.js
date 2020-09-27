import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import ChoiceButton from'./component/ChoiceButton'
import CHOICES from'./choices'
import Choicecard from './component/ChoiceCard'

export default class App extends React.Component  {
 constructor(props){
   super(props)
   this.state={
   userChoice:{}  
   }
 }

onButtonPress=(choice) =>{
     const userChoice = CHOICES.find(item => item.name === choice)
     this.setState({userChoice})
}
render(){
  return (
    <View style={styles.container}>
      <View style={styles.Header}> </View>

        <View style={styles.playGame}>
          <View style={styles.choiceContainer}>
            <Choicecard />
              <Text>
                vs
              </Text>
            

          </View>


           <View style={styles.choiceButton}> 
              <View style={styles.buttonContainer}>
                <ChoiceButton onButtonPress={this.onButtonPress} />
              </View>
      </View>
     </View>
    </View>
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9ebee'
  },
  Header:{
    flex:0.15,
    
  },
  playGame:{
    flex:0.7,
  },
  choiceButton:{
    flex:0.15,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
  },
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
