import React, { useState } from 'react'
import { StyleSheet, View, Image, TextInput, Platform, TouchableOpacity, Text } from 'react-native';
import { globalTheme, colorsTheme } from '../../../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props{
    changeStep: (step: number) => void
}

export const FirstStepRegister = ( { changeStep }:Props ) => {

    
    const [secureTextPassword, setSecureTextPassword] = useState<boolean>(true);


    return (
        <View style={{
            flex: 1,
            marginBottom: 20
        }}>
            
            <View style={{ 
                        ...globalTheme.formContainer,
                        flex: 1
                    }}>



                <View style={{ ...globalTheme.profileImageContainer }}>
                    
                    <Image 
                        style={{ ...globalTheme.profileImage }} 
                        source={ require('../../../assets/images/shape05.png') } />


                    <TouchableOpacity style={{ ...styles.buttonCamera }} activeOpacity={0.6}>
                        <Icon name='camera-outline' color={'black'} size={20} />
                    </TouchableOpacity>

                </View>



                <View style={{ ...globalTheme.inputContainer }}>
                    <TextInput
                        placeholder='Nombres'
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholderTextColor="#9D9B9B"
                        style={{
                            ...globalTheme.inputText
                        }}
                        // value={textValue}
                        // onChangeText={setTextValue}
                    />
                </View>

                <View style={{ ...globalTheme.inputContainer }}>
                    <TextInput
                        placeholder='Apellidos'
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholderTextColor="#9D9B9B"
                        style={{
                            ...globalTheme.inputText
                        }}
                        // value={textValue}
                        // onChangeText={setTextValue}
                    />
                </View>
                

                <View style={{ ...globalTheme.inputContainer }}>
                    <TextInput
                        placeholder='Sexo'
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholderTextColor="#9D9B9B"
                        style={{
                            ...globalTheme.inputText
                        }}
                        // value={textValue}
                        // onChangeText={setTextValue}
                    />
                </View>
                

                <View style={{ ...globalTheme.inputContainer }}>
                    <TextInput
                        placeholder='Correo'
                        autoComplete='email'
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholderTextColor="#9D9B9B"
                        style={{
                            ...globalTheme.inputText
                        }}
                        // value={textValue}
                        // onChangeText={setTextValue}
                    />
                </View>
                

                <View style={{ ...globalTheme.inputContainer }}>
                    <TextInput
                        placeholder='Teléfono'
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholderTextColor="#9D9B9B"
                        style={{
                            ...globalTheme.inputText
                        }}
                        // value={textValue}
                        // onChangeText={setTextValue}
                    />
                </View>
                

                <View style={{ ...globalTheme.inputContainer }}>
                    <TextInput
                        placeholder='Fecha de nacimiento'
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholderTextColor="#9D9B9B"
                        style={{
                            ...globalTheme.inputText
                        }}
                        // value={textValue}
                        // onChangeText={setTextValue}
                    />
                </View>


                <View style={{ ...globalTheme.inputContainer }}>
                    
                    <Image 
                        style={{ ...globalTheme.inputIconImage }} 
                        source={ require('../../../assets/images/shape04.png') } />

                    <TextInput 
                        
                        placeholder='Contraseña'
                        autoComplete='password'
                        secureTextEntry={secureTextPassword}
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholderTextColor="#9D9B9B"
                        style={{
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
                        onPress = { ()=>{ changeStep(2) }}
                        >
                        <Text style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Continuar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonCamera: {
        borderWidth: 1, 
        borderColor: "#000", 
        borderRadius: 100, 
        width: 38, 
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        top: -20,
        backgroundColor: '#fff'
    }
});