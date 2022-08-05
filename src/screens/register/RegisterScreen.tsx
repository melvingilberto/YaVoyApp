import React, { useState } from 'react'
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalTheme, colorsTheme } from '../../theme/appTheme';
import { FirstStepRegister } from './components/FirstStepRegister';
import { SecondStepRegister } from './components/SecondStepRegister';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackNavigationParams } from '../../navigation/AuthNavigator';

const { height } = Dimensions.get('window');

interface Props extends StackScreenProps<RootStackNavigationParams, 'RegisterScreen'>{

}

export const RegisterScreen = ( {navigation}:Props ) => {

    const [step, setStep] = useState<number>(1);



    return (
        <ScrollView style={{ 
            ...globalTheme.gloabalHorizontalMargin, 
            height: height + 20, 
            backgroundColor: "#fff",
            flex: 1,
        }}>
            <View style={{ marginTop: 45 }}>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={ ()=>{ step == 1 ? navigation.navigate('LoginScreen') : setStep(1) } }
                >
                    <Icon name="arrow-back-outline" color={'#000'} style={{
                        fontSize: 25,
                        position: 'absolute',
                        top: -30
                    }}/>
                </TouchableOpacity>
                
                <Text style={{ 
                    ...globalTheme.centuryBoldText, 
                    ...colorsTheme.primaryTextColor,
                    fontSize: 25 
                }}> Ingresa tus datos </Text>
                
                { 
                    (step === 1)
                    ? <FirstStepRegister changeStep={setStep} />
                    : <SecondStepRegister changeStep={setStep} />
                }
            </View>
        </ScrollView>
    )
}

