import * as React from 'react';
import { Button, View, Text,Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Styles from '../styleSheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import GLOBAL from '../globalState.js';



export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.showValue = this.showValue.bind(this);
        this.hello = this.hello.bind(this);
        this.state = {
            userName: 'User1',
            showPassword: true,
            password: ''
        }
    }
    render() {
        return (
            <SafeAreaProvider>
                <SafeAreaView>
                    <View style={Styles.centeredView}>
                        <Input placeholder='User Name' value={this.state.userName} onChangeText={(e) => this.onChangeValue('userName', e)} leftIcon={
                            <Icon name='user' size={15} color='black' />} />
                        <Input placeholder='Password' value={this.state.password} onChangeText={(e) => this.onChangeValue('password', e)} secureTextEntry={this.state.showPassword} leftIcon={
                            <Icon name='lock' size={15} color='black' />} rightIcon={<Icon size={24} name="eye" color='grey' onPress={this.showValue}></Icon>} />
                        <Button title='Login' type='outline' onPress={this.hello}></Button>
                        <Text>Home Screen</Text>
                        <Button
                            title="Go to Home... again"
                            onPress={() => this.props.navigation.navigate('Home')}
                        />
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        );
    }

    //****** Functions **/
    hello() {
        Alert.alert("Hello" + this.state.userName);

    }

    showValue() {
        this.setState({ showPassword: !this.state.showPassword });
    }

    onChangeValue(key, value) {
        this.setState({ [key]: value});
    }



    onButtonPress() {
        this.props.navigation.navigate('Second_screen');
    }


}
