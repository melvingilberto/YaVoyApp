import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity, TextInput, Platform, Text } from 'react-native';
import { RootStackNavigationParams } from '../../../navigation/AuthNavigator';
import { globalTheme } from '../../../theme/appTheme';

interface Props{
    changeStep: (step: number) => void
}

export const SecondStepRegister = ( { changeStep }:Props ) => {

    const navigation = useNavigation<any>();

   return (
    
    <View style={{
        flex: 1,
        marginBottom: 20
    }}>
        
        <View style={{ 
                    ...globalTheme.formContainer,
                    flex: 1
                }}>

            <View style={{ ...globalTheme.inputContainer }}>
                <TextInput
                    placeholder='Pais'
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
                    placeholder='Departamento'
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
                    placeholder='Ciudad'
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
                    placeholder='N° Identificación:'
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

            <View style={{marginTop: 10 }}>
                <TouchableOpacity 
                    style={{...globalTheme.primaryButtom}} 
                    activeOpacity={0.8}
                    onPress = { ()=>{ navigation.replace('GeneralBottonTabBarContainer') }}
                    >
                    <Text style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>INICIAR SESIÓN</Text>
                </TouchableOpacity>
            </View>

        </View>
    </View>
  )
}

const styes = StyleSheet.create({

});