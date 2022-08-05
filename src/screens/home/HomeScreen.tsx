import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { RecomendationInterface } from '../../interface/RecomendationInterface';
import { RecomendationPoster } from './components/RecomendationPoster';

export const HomeScreen = () => {

    const [recomendationsSlider, seRecomendationsSlider] = useState<RecomendationInterface[]>([
        {
            id: 1,
            url: 'https://picsum.photos/400/200?random=1'
        },
        {
            id: 2,
            url: 'https://picsum.photos/400/200?random=2'
        },
        {
            id: 3,
            url: 'https://picsum.photos/400/200?random=3'
        },
        {
            id: 4,
            url: 'https://picsum.photos/400/200?random=4'
        },
    ]);

    return (
        <View style={{ ...styles.container }}>

            <View>
                
                <Carousel 
                    data={recomendationsSlider}
                    renderItem={ ({ item }) => <RecomendationPoster recomendation={ item } />}
                    sliderWidth={250}
                    itemWidth={300}
                    inactiveSlideOpacity={0.9}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
});