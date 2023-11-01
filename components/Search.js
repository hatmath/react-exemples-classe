
import React from "react"
import { StyleSheet, View, TextInput, Button } from 'react-native'

const Search = (categorie) => {
    return (
        <View>
            <TextInput style={styles.textinput} placeholder={categorie.name} />
            <TextInput style={styles.row} />
            <Button title='Rechercher avec =>' onPress={() => { }} />
        </View>
    )
}

// class Search extends React.Component {
//     render() {
//         return (
//             <View>
//                 <TextInput placeholder='Titre du film' />
//                 <Button title='Rechercher' onPress={() => {}} />
//             </View>
//         )
//     }
// }

const styles = StyleSheet.create({
    textinput: {
        marginLeft: 35,
        marginRight: 35,
        height: 50,
        borderColor: '#00a300',
        borderWidth: 5,
        paddingLeft: 20
    },
    row: {
        padding: 4,
        borderBottomColor: "red",
        borderBottomWidth: StyleSheet.hairlineWidth
    }
})

export default Search