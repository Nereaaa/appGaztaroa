import React, { Component } from 'react';
import { Text, ScrollView, View, Button} from 'react-native';
import { Card, Input } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';

class Contacto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: [],
            concepto: [],
            mensaje: [],
        }
    }
    nuevoCorreo = async () => {
        MailComposer.composeAsync({
            recipients: ["gaztaroa@gaztaroa.com"],
            subject: this.state.nombre + ' - ' + this.state.concepto,
            body: this.state.mensaje,
        })
    }

    vaciarInfo = () => {
        this.setState({
            nombre: [],
            concepto: [],
            mensaje: [],
        })
    }

    render() {
        return(
            <ScrollView>
                <Card>
                    <Card.Title>Información de contacto</Card.Title>
                    <Card.Divider/>
                    <Text style={{margin: 10}}>
                    Kaixo Mendizale!{'\n'}{'\n'}
                    Si quieres participar en las salidas de montaña que organizamos o quieres hacerte soci@ de Gaztaroa, puedes contactar con nosotros a través de diferentes medios. Puedes llamarnos por teléfono los jueves de las semanas que hay salida (de 20:00 a 21:00). También puedes ponerte en contacto con nosotros escribiendo un correo electrónico, o utilizando la aplicación de esta página web. Y además puedes seguirnos en Facebook.{'\n'}{'\n'}
                    Para lo que quieras, estamos a tu disposición!{'\n'}{'\n'}
                    Tel: +34 948 277151{'\n'}{'\n'}
                    Email: gaztaroa@gaztaroa.com
                    </Text>
                </Card>     
                <Card>
                    <Card.Title>Contactanos</Card.Title>
                    <Card.Divider/>
                    <Text style={{ margin: 10 }}>
                        Nombre:
                    </Text>
                    <Input
                        value={this.state.nombre}
                        onChangeText={value => this.setState({ nombre: value })}
                    />
                    <Text style={{ margin: 10 }}>
                        Concepto:
                    </Text>
                    <Input
                        value={this.state.concepto}
                        onChangeText={value => this.setState({ concepto: value })}
                    />
                    <Text style={{ margin: 10 }}>
                        Mensaje:
                    </Text>
                    <Input
                        value={this.state.mensaje}
                        onChangeText={value => this.setState({ mensaje: value })}
                    />
                    <View >
                        <Button title="Enviar" onPress={() => (this.nuevoCorreo(), this.vaciarInfo())} />
                    </View>
                </Card>
            </ScrollView>       
            );
    }
}

export default Contacto;