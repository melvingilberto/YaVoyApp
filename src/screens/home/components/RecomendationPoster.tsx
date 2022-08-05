import React from 'react'
import { Image, View } from 'react-native';
import { RecomendationInterface } from '../../../interface/RecomendationInterface';

interface Props {
    recomendation: RecomendationInterface
}

export const RecomendationPoster = ( {recomendation}:Props ) => {
  return (
    <View>
        <Image 
            source={{ uri: recomendation.url }}
        />
    </View>
  )
}
