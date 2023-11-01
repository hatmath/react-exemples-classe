import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

class BoutonPers extends React.Component {
    render() {
        console.log(this.props.texte);
        return (
            <TouchableOpacity style={styles.touche} onPress={() => { this.props.onPress(this.props.texte); }}>
                <Text style={styles.texte}>{this.props.texte}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    touche: {
        margin: 5,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: 'blue'
    },
    texte: {
        fontSize: 40,
        color: "white",
        fontWeight: "bold"
    }
});

export default BoutonPers