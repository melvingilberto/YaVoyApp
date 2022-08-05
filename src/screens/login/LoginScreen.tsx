import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, TextInput, Platform, TouchableOpacity } from 'react-native';
import { colorsTheme, globalTheme } from '../../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackNavigationParams } from '../../navigation/AuthNavigator';

interface Props extends StackScreenProps<RootStackNavigationParams, 'LoginScreen'>{}

const { width, height } = Dimensions.get('window');
export const LoginScreen = ({ navigation } : Props) => {

    const [secureTextPassword, setSecureTextPassword] = useState<boolean>(true);

    const handleLogin = () => {
        navigation.navigate("RegisterScreen");
    }

    return (
        <View style={{ ...styles.container }}>
    
            <View style={{ ...styles.loginWrapper }}>
    
                <Image style={{ ...styles.logo }} source={ require('../../assets/images/logo.png') }/>
    
                <View style={{ 
                    ...globalTheme.formContainer,
                    width: width * 0.75,
                    height: '100%'
                }}>

                    <Text style={{ 
                        ...globalTheme.centuryBoldText, 
                        ...colorsTheme.primaryTextColor,
                        fontSize: 25 
                    }}> Login </Text>

                    <View style={{ ...globalTheme.inputContainer }}>
                        
                        <Image 
                            style={{ ...globalTheme.inputIconImage }} 
                            source={ require('../../assets/images/shape01.png') } />

                        <TextInput 
                            placeholder='juanperez@yavengo.com'
                            autoComplete='email'
                            autoCapitalize='none'
                            autoCorrect={false}
                            placeholderTextColor="#9D9B9B"
                            style={{
                                top: (Platform.OS === 'ios') ? 0 : 0,
                                ...globalTheme.inputText
                            }}
                            // value={textValue}
                            // onChangeText={setTextValue}
                        />

                    </View>
    
    
                    <View style={{ ...globalTheme.inputContainer }}>
                        
                        <Image 
                            style={{ ...globalTheme.inputIconImage }} 
                            source={ require('../../assets/images/shape04.png') } />

                        <TextInput 
                            
                            placeholder='********'
                            autoComplete='password'
                            secureTextEntry={secureTextPassword}
                            autoCapitalize='none'
                            autoCorrect={false}
                            placeholderTextColor="#9D9B9B"
                            style={{
                                top: (Platform.OS === 'ios') ? 0 : 0,
                                ...globalTheme.inputText
                            }}
                            // value={textValue}
                            // onChangeText={setTextValue}
                        />
                        
                        <TouchableOpacity
                            onPress={ () => { setSecureTextPassword(!secureTextPassword) }}
                        >
                            { (secureTextPassword) 
                            
                                ? <Icon name="eye" color={"black"} style={{ ...globalTheme.inputIcon }}/> 
                                : <Icon name="eye-off" color={"black"} style={{ ...globalTheme.inputIcon }}/>
                            }
                            
                        </TouchableOpacity>

                    </View>

                    <View style={{marginTop: 10 }}>
                        <TouchableOpacity 
                            style={{...globalTheme.primaryButtom}} 
                            activeOpacity={0.8}
                            onPress={ ()=>{ navigation.replace('GeneralBottonTabBarContainer') } }
                            >
                            <Text style={{ fontWeight: 'bold' }}>INICIAR SESIÓN</Text>
                        </TouchableOpacity>
                    </View>

                    
                    <View style={{ ...globalTheme.primaryLink, marginVertical: 20 }}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Text style={{ ...colorsTheme.secondaryTextColor }}>
                                ¿No tienes una cuenta?
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity 
                            style={{...globalTheme.primaryButtomOutLine}} 
                            activeOpacity={0.6}
                            onPress = { handleLogin }
                            >
                            <Text style={{ fontWeight: 'bold', ...colorsTheme.secondaryTextColor }}>
                                REGISTRATE AQUÍ
                            </Text>
                        </TouchableOpacity>
                    </View>
    
                </View>
    
            </View>
    
            <Image style={{ ...styles.footerImage}} source={ require("../../assets/images/shape03.png") } />
    
        </View>
      )
    }
    
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#FFFFFF"
        },
        loginWrapper: {
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
            zIndex: 999
        },
        logo: {            
            width: 199,
            height: 159
        },
        footerImage: {        
            width: 266,
            height: 266,
            position: "absolute", 
            bottom: -20
        }
    });