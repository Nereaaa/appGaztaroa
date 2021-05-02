import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { ListItem, Avatar } from 'react-native-elements';
import {  FlatList } from 'react-native';
import { baseUrl } from '../comun/comun';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      actividades: state.actividades
    }
  }


function Historia() {
    return(
      <Card>
        <Card.Title>Un poquito de historia</Card.Title>
        <Card.Divider/>
        <Text style={{margin: 20}}>
            El nacimiento del club de montaña Gaztaroa se remonta a la primavera de 1976 cuando jóvenes aficionados a la montaña y pertenecientes a un club juvenil decidieron crear la sección montañera de dicho club. Fueron unos comienzos duros debido sobre todo a la situación política de entonces. Gracias al esfuerzo económico de sus socios y socias se logró alquilar una bajera. Gaztaroa ya tenía su sede social.
        </Text>
        <Text style={{margin: 20}}>    
            Desde aquí queremos hacer llegar nuestro agradecimiento a todos los montañeros y montañeras que alguna vez habéis pasado por el club aportando vuestro granito de arena.
        </Text>
        <Text style={{margin: 20}}>  
            Gracias!
        </Text>
      </Card>
    );  
}


function RenderQuienesSomos(props) {
    const actividades = props.actividades;
    
    const renderQuienesSomosItem = ({item, index}) => {
        
        return (
            <ListItem key={index} bottomDivider>
                <Avatar source={{uri: baseUrl + item.imagen}}/>
                <ListItem.Content>
                    <ListItem.Title>{item.nombre}</ListItem.Title>
                    <ListItem.Subtitle>{item.descripcion}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem> 
          );
      };
      
      return (
        <Card>
          <Card.Title>Actividades</Card.Title>
          <Card.Divider/>
          <FlatList 
              data={actividades.actividades}
              renderItem={renderQuienesSomosItem}
              keyExtractor={item => item.id.toString()}
              />
        </Card>
      );
  }
class QuienesSomos extends Component {
   
     
    render(){
    return(
        <ScrollView>
            <Historia/>
            <RenderQuienesSomos actividades={this.props.actividades}/>
        </ScrollView>
    );
  } 
}

export default connect(mapStateToProps)(QuienesSomos);