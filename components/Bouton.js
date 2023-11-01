import React from "react"
import { View, Button, PropsStyleSheet, TextInput } from 'react-native'

// class Bouton extends React.Component {
//     render() {
//         console.log(this.props)
//         return (
//             <View>
//                 <Button title={this.props.titre} onPress={() =>
//                 {this.props.onPress()}} />
//             </View>
//             )
//         }
// } 

const Bouton = (props) => {
    console.log(props.titre)
    return (
        <View>
            <Button title={props.titre} onPress={() => { props.onPress() }} />
        </View>
    )
}

export default Bouton;
