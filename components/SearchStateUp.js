// Lifting state up: https://reactjs.org/docs/lifting-state-up.html

import React from 'react'
import { View, TextInput, Button } from 'react-native'

class SearchStateUp extends React.Component {
    state = {
        TitreFilm: ''
    }

    handleTitreFilm = (texte) => {
        this.setState({ TitreFilm: texte });
        console.log(texte);
    }

    afficher = (TitreFilm) => {
        alert(TitreFilm);
        this.props.onLeTexteChange(TitreFilm);
    }
    render() {
        return (
            <View>
                <TextInput placeholder='Search State Up' onChangeText={this.handleTitreFilm} />
                <Button title='Trouver' onPress={() => { this.afficher(this.state.TitreFilm); }} />
            </View>
        )
    }
}

export default SearchStateUp