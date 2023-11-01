import React from 'react'
import { View, TextInput, Button } from 'react-native'

class SearchAction extends React.Component {

    state = { TitreFilm: '' }

    handleTitreFilm = (texte) => { this.setState({ TitreFilm: texte }) }

    afficher = (titreFilm) => { alert(titreFilm) }

    render() {
        return (
            <View>
                <TextInput placeholder='Titre du film' onChangeText={this.handleTitreFilm} />
                <Button title='Rechercher' onPress={() => { this.afficher(this.state.TitreFilm) }} />
            </View>
        )
    }

}

export default SearchAction