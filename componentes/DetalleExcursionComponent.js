import React, { Component } from 'react';
import { Card, Icon } from 'react-native-elements';
import { EXCURSIONES } from '../comun/excursiones';
import { Text, View, ScrollView, StyleSheet, FlatList} from 'react-native';
import { COMENTARIOS } from '../comun/comentarios';
import { baseUrl } from '../comun/comun';

function RenderExcursion(props) {

    const excursion = props.excursion;
    
        if (excursion != null) {
            return(
            <Card>
              <Card.Image source={{uri: baseUrl + excursion.imagen}}>
                <View style={styles.drawerView}>
                    <Card.Title style={styles.drawerTitle}>{excursion.nombre}</Card.Title>
                </View>
                </Card.Image>
              <Text style={{margin: 20}}>
                {excursion.descripcion}
              </Text>
              <Icon
                    raised
                    reverse
                    name={ props.favorita ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    onPress={() => props.favorita ? console.log('La excursión ya se encuentra entre las favoritas') : props.onPress()}
                />
            </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

function RenderComentario(props) {

  const comentarios = props.comentarios;
          
  const renderCommentarioItem = ({item, index}) => {
      
      return (
          <View key={index} style={{margin: 10}}>
              <Text style={{fontSize: 14}}>{item.comentario}</Text>
              <Text style={{fontSize: 12}}>{item.valoracion} Stars</Text>
              <Text style={{fontSize: 12}}>{'-- ' + item.autor + ', ' + item.dia} </Text>
            </View>
        );
    };
    
    return (
      <Card>
        <Card.Title>Comentarios</Card.Title>
        <Card.Divider/>
        <FlatList 
            data={comentarios}
            renderItem={renderCommentarioItem}
            keyExtractor={item => item.id.toString()}
            />
      </Card>
    );
}

class DetalleExcursion extends Component {
  constructor(props) {
      super(props);
      this.state = {
          excursiones: EXCURSIONES,
          comentarios: COMENTARIOS,
          favoritos: []
      };
  }
  
  marcarFavorito(excursionId) {
    this.setState({favoritos: this.state.favoritos.concat(excursionId)});
  }

  render(){
      const {excursionId} = this.props.route.params;
      
  
      return(
        <ScrollView>
            <RenderExcursion
                excursion={this.state.excursiones[excursionId]}
                favorita={this.state.favoritos.some(el => el === excursionId)}
                onPress={() => this.marcarFavorito(excursionId)}

            />
            <RenderComentario
                comentarios={this.state.comentarios.filter((comentario) => comentario.excursionId === excursionId)}
            />
        </ScrollView>
    );

  } 
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
    },
    drawerView: {
      position: 'absolute', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    drawerTitle: {
      color:'white', 
      fontSize: 33
    }
  });
export default DetalleExcursion;