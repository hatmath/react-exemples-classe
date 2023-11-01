import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

const PochetteCD = () => {
    return exemple10_PochetteCD();
}

function exemple10_PochetteCD() {
    return (
        <View style={styles.main_container}>
            <Image style={styles.image} source={require('../assets/DavidGilmour.jpg')} />
            <View style={styles.content_container}>
                <Text style={styles.titre_album}>On the island</Text>
                <Text style={styles.description_album}>Artiste: David Gilmour</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row',
        borderColor: 'red',
        borderWidth: 1
    },
    image: {
        width: 180,
        height: 180,
        margin: 5,
        borderColor: 'gray',
        borderWidth: 1
    },
    content_container: {
        flex: 1,
        margin: 5,
        borderColor: 'red',
        borderWidth: 1
    },
    titre_album: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingLeft: 5,
        borderColor: 'gray',
        borderWidth: 1
    },
    description_album: {
        flex: 5,
        fontStyle: 'italic',
        color: 'black',
        paddingLeft: 5
    }
});

export default PochetteCD