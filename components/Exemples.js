import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Search';
import DemoFlex from './DemoFlex';
import PochetteCD from './PochetteCD';
import Bouton from './Bouton';
import BoutonPers from './BoutonPers';
import SearchAction from './SearchAction';
import SearchStateUp from './SearchStateUp';

export default function Exemples() {
  const [leTexte, setLeTexte] = useState('');

  const handleLeTexte = useCallback((texte) => {
    setLeTexte(texte);
    console.log("allo " + texte);
  }, []);

  const affiche = useCallback((nombre) => {
    console.log(nombre);
  }, []);

  const handleOnPress = useCallback((texte) => {
    alert(texte);
  }, []);

  return (
    <View>
      <Search name="Vin" />
      <DemoFlex />
      <PochetteCD />
      <Bouton titre='Allo' onPress={() => affiche('1')} />
      <View style={styles.wrapper}>
        <BoutonPers texte="bouton 1" onPress={handleOnPress} />
        <BoutonPers texte="bouton 2" onPress={handleOnPress} />
      </View>
      <SearchAction />
      <SearchStateUp 
        leTexte={leTexte}
        onLeTexteChange={handleLeTexte} />  
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});