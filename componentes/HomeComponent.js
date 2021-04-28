import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements';
import { EXCURSIONES } from '../comun/excursiones';
import { CABECERAS } from '../comun/cabeceras';
import { ACTIVIDADES } from '../comun/actividades';

function RenderItem(props) {
    
        const item = props.item;
        
        if (item != null) {
            return(
                <Card>
                    <Card.Divider/>
                    <Card.Image source={require('./imagenes/40Años.png')} >
                        <View style={{position: 'absolute', top: -100, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Card.Title style={{color:'chocolate', fontSize: 33}}>{item.nombre}</Card.Title>
                        </View>
                    </Card.Image>
                    <Text style={{margin: 20}}>
                        {item.descripcion}
                    </Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          excursiones: EXCURSIONES,
          cabeceras: CABECERAS,
          actividades: ACTIVIDADES
        };
    }

    render() {
        
        return(
            <ScrollView>
                <RenderItem item={this.state.cabeceras.filter((cabecera) => cabecera.destacado)[0]} />
                <RenderItem item={this.state.excursiones.filter((excursion) => excursion.destacado)[0]} />
                <RenderItem item={this.state.actividades.filter((actividad) => actividad.destacado)[0]} />
            </ScrollView>
        );
    }
}

export default Home;