import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export function Detalhes(props) {
    return(
        <View  style={styles.container}>
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
                <Text style={{color:'#fff', fontSize: 16, textAlign:'center'}} >Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.titulo}>{props.filme.nome}</Text>
                <Text style={styles.sinpse}> Sinope: </Text>
                <Text style={styles.descricao}> {props.filme.sinopse} </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'

  },
  modalContainer:{
    height: '80%',
    width:'100%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  btnVoltar:{
    backgroundColor: '#e52246',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  titulo:{
    textAlign: 'center',
    color: '#fff',
    padding: 15,
    fontSize: 30,
    fontWeight: 'bold'
  },
  sinpse:{
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10,
  },
  descricao:{
    color: '#fff',
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'justify'
  }
})