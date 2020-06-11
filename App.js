import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class app extends Component {

  constructor(props){
    super(props);
    this.state = {
      weight: 0,
      height: 0,
      imc: 0,
      subtitle: '',
      bgColor: '#2E3138',
      borderColor: '#2980b9'
    };

    this.calculate = this.calculate.bind(this);
  }

  calculate(){
    if( this.state.weight > 0 && this.state.height > 0){
    
      let result = this.state.weight / (this.state.height * this.state.height)
      

      if(result < 18.5){
        this.setState({subtitle: 'ABAIXO DO PESO'});
        this.setState({bgColor: '#EA2027'});
      }else if(result < 25){
        this.setState({subtitle: 'PESO NORMAL'});
        this.setState({bgColor: '#C4E538'});
      }else if(result < 30){
        this.setState({subtitle: 'SOBREPESO'});
        this.setState({bgColor: '#FFC312'});
      }else if(result < 35){
        this.setState({subtitle: 'OBESIDADE GRAU 1'});
        this.setState({bgColor: '#F79F1F'});
      }else if(result < 40){
        this.setState({subtitle: 'OBESIDADE GRAU 2'});
        this.setState({bgColor: '#EE5A24'});
      }else if(result >= 40){
        this.setState({subtitle: 'OBESIDADE GRAU 3'});
        this.setState({bgColor: '#EA2027'});
      }
      this.setState({imc: result.toFixed(2)});
      this.setState({borderColor: '#000'});
    }
  }

 render(){
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Calcule Seu IMC</Text>
      <View style={[styles.result, {backgroundColor: this.state.bgColor, borderColor: this.state.borderColor}]}>
        <Text style={styles.imc}>{this.state.imc}</Text>
        <Text style={styles.subtitle}>{this.state.subtitle}</Text>
     </View>
     <View style={styles.inputBox}>
        <TextInput style={styles.input} placeholder="Peso" keyboardType="numeric" onChangeText={(value) => this.setState({weight: value.replace(',','.')})}/>
     </View>
     <View style={styles.inputBox}>
        <TextInput style={styles.input} placeholder="Altura" keyboardType="numeric" onChangeText={(value) => this.setState({height: value.replace(',','.')})}/>
     </View>

     <TouchableOpacity style={styles.btn} onPress={()=>{this.calculate()}}>
        <Text style={styles.btnText}>CALCULAR</Text>
     </TouchableOpacity>
     
   </View>
   );
 }
}

const styles = StyleSheet.create({
  imc:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFF'
  },
  subtitle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF'
  },
  result: {
    width: '70%',
    height: 120,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  btn:{
    width: '90%',
    backgroundColor: '#2980b9',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#ecf0f1',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  title: {
    color: '#ecf0f1',
    fontSize: 25,
    marginVertical: 20,
    fontWeight: 'bold',
  },
  inputBox: {
    width: '90%',
    backgroundColor: '#ecf0f1',
    marginBottom: 20,
    borderRadius: 8,
  },
  input:{
    textAlign: 'center',
    fontSize: 20,
  },
  container:{
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
  }
})