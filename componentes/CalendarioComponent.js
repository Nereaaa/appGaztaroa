import React, { Component } from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import { SafeAreaView, FlatList } from 'react-native';
import { baseUrl } from '../comun/comun';
import { connect } from 'react-redux';
import {IndicadorActividad} from './IndicadorActividadComponent';

const mapStateToProps = state => {
    return {
      excursiones: state.excursiones
    }
  }

class Calendario extends Component {

    render(){

    const { navigate } = this.props.navigation;    

    const renderCalendarioItem = ({item, index}) => {
        return (
            <ListItem
                key={index}
                onPress={() => navigate('DetalleExcursion', { excursionId: item.id })}
                bottomDivider>
                <Avatar source={{ uri: item.imagen }} />
                <ListItem.Content>
                    <ListItem.Title>{item.nombre}</ListItem.Title>
                    <ListItem.Subtitle>{item.descripcion}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem> 
        );
    };
    if (this.props.excursiones.isLoading){
        return(
            <IndicadorActividad/>
        );
    }else if(this.props.excursiones.errMess){
        return(
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }
    else{
        return (
            <SafeAreaView>
                <FlatList 
                    data={this.props.excursiones.excursiones}
                    renderItem={renderCalendarioItem}
                    keyExtractor={item => item.id.toString()}
                    isLoading={this.props.excursiones.isLoading}
                    errMess={this.props.excursiones.errMess}
                />
            </SafeAreaView>
        );
    }
    }
}

export default connect(mapStateToProps)(Calendario);