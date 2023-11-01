// ---------------------------------------------------
// Pour utilisation d'un Drawer
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// ---------------------------------------------------
// Pour App Meteo
// import React from 'react';
// import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
// import Entete from './components/Entete';
// import Meteo from './components/Meteo';
// import PiedDePage from './components/PiedDePage';
// import { API_KEY } from './assets/WeatherAPIKey';

// export default class App extends React.Component {
//   state = {
//     temperature: "--.--",
//     description: " ",
//     icone: this.getIcone('unknown')
//   }
  
//   componentDidMount() {
//     console.log("je suis prêt");
//     this.fetchMeteo();
//   } 
  
//   render() {
//     return (
//       <SafeAreaView style={styles.main_container}>
//         <StatusBar />
//         <Entete />
//         <Meteo
//           temperature={this.state.temperature}
//           description={this.state.description}
//           icone={this.state.icone}/>
//         <PiedDePage 
//           onPress={() => {
//             this.fetchMeteo();
//             console.log("je fetch"); }}/>
//       </SafeAreaView>
//     )
//   }
  
//   fetchMeteo() {
//     const URL = "http://api.openweathermap.org/data/2.5/weather?" + "q=Montreal,ca&lang=fr&units=metric&appid=" + API_KEY;
//     fetch(URL)
//       .then(res => res.json())
//       .then(json => { 
//           this.setState({
//             temperature: json.main.temp,
//             description: json.weather[0].description,
//             icone: this.getIcone(json.weather[0].icon)
//           });
//           console.log(this.getIcone(json.weather[0].icon));
//       });
//   }
      
//   getIcone(nom) {
//     switch (nom) {
//       case 'unknown':
//         console.log("unknown");
//         return (require('./assets/unknown.png'));
//       case '01d':
//         console.log("01d");
//         return (require('./assets/01d.png'));
//       case '01n':
//         console.log("01n");
//         return (require('./assets/01n.png'));
//       case '02d':
//         console.log("02d");
//         return (require('./assets/02d.png'));
//       case '02n':
//         console.log("02n");
//         return (require('./assets/02n.png'));
//       case '03d':
//         console.log("03d");
//         return (require('./assets/03d.png'));
//       case '03n':
//         console.log("03n");
//         return (require('./assets/03n.png'));
//       case '04d':
//         console.log("04d");
//         return (require('./assets/04d.png'));
//       case '04n':
//         console.log("04n");
//         return (require('./assets/04n.png'));
//       case '09d':
//         console.log("09d");
//         return (require('./assets/09d.png'));
//       case '09n':
//         console.log("09n");
//         return (require('./assets/09n.png'));
//       case '10d':
//         console.log("10d");
//         return (require('./assets/10d.png'));
//       case '10n':
//         console.log("10n");
//         return (require('./assets/10n.png'));
//       case '11d':
//         console.log("11d");
//         return (require('./assets/11d.png'));
//       case '11n':
//         console.log("11n");
//         return (require('./assets/11n.png'));
//       case '13d':
//         console.log("13d");
//         return (require('./assets/13d.png'));
//       case '13n':
//         console.log("13n");
//         return (require('./assets/13n.png'));
//       case '50d':
//         console.log("50d");
//         return (require('./assets/50d.png'));
//       case '50n':
//         console.log("50n");
//         return (require('./assets/50n.png'));
//       default:
//         console.log("default");
//         return (require('./assets/unknown.png'));
//     }
//   }
// }

// const styles = StyleSheet.create({
//   main_container: {
//     flex: 1,
//     backgroundColor: 'yellow'
//   }
// })

// ---------------------------------------------------
// Pour tester tout les exemples précédent l'app Meteo
// import React from 'react';
// import { View } from 'react-native';
// import Exemples from './components/Exemples';

// export default function App() {
//   return (
//     <View>
//       <Exemples />
//     </View>
//   );
// }