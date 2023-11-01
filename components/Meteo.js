import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class Meteo extends React.Component {
    render() {
        return (
            <View style={styles.meteo}>
                <Text>Montréal, Canada</Text>
                    <Image
                        style={styles.icone}
                        source={this.props.icone}
                    />
                <Text>
                    {this.props.description}
                </Text>
                <Text style={styles.temperature}>
                    {this.props.temperature} &deg;C
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    meteo: {
        flex: 1,
        alignItems: 'center'
    },
    icone: {
        marginTop: 40,
        width: "120px",
        height:  "120px"
    },
    temperature: {
        fontSize: 40,
        fontWeight: "bold"
    },
    icone_container: {
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: "120px",
        height:  "120px"
    }
})

export default Meteo