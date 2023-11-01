import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

const DemoFlex = () => {

    return exemple91_Reverse();
    return exemple9_Centrer_HorizontalAxeSecondaire();
    return exemple8_CentrerVerticalementAxePrincipal();
    return exemple7_TroisPetitesBoites();
    return exemple6_AlignementHorizontal();
    return exemple5_UnTierDeuxTier();
    return exemple4_MoitieMoitie();
    return exemple3_DimensionsStatiques();
    return exemple();
}

function exemple() {
    return (
        <View style={{ height: '80%', width: '100%', backgroundColor: 'yellow' }}>
            <View style={{ height: 35, backgroundColor: 'red' }}></View>
            <View style={{ height: 335, backgroundColor: 'green' }}></View>
        </View>
    )
}

function exemple3_DimensionsStatiques() {
    return (
        <View style={{ backgroundColor: 'yellow' }}>
            <View style={{ height: 355, backgroundColor: 'red' }}></View>
            <View style={{ height: 335, backgroundColor: 'green' }}></View>
        </View>
    )
}


function exemple4_MoitieMoitie() {
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'yellow' }}>
            <View style={{ flex: 1, backgroundColor: 'red' }}></View>
            <View style={{ flex: 1, backgroundColor: 'green' }}></View>
        </View>
    )
}

function exemple5_UnTierDeuxTier() {
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'yellow' }}>
            <View style={{ flex: 1, backgroundColor: 'red' }}></View>
            <View style={{ flex: 2, backgroundColor: 'green' }}></View>
        </View>
    )
}


function exemple6_AlignementHorizontal() {
    return (
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'yellow' }}>
            <View style={{ flex: 1, backgroundColor: 'red' }}></View>
            <View style={{ flex: 2, backgroundColor: 'green' }}></View>
            <View style={{ flex: 3, backgroundColor: 'blue' }}></View>
        </View>
    )
}

function exemple7_TroisPetitesBoites() {
    return (
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'yellow' }}>
            <View style={{ height: 50, width: 50, backgroundColor: 'red' }}></View>
            <View style={{ height: 50, width: 50, backgroundColor: 'green' }}></View>
            <View style={{ height: 50, width: 50, backgroundColor: 'blue' }}></View>
        </View>
    )
}

function exemple8_CentrerVerticalementAxePrincipal() {
    // Valeur possible pour jsutifyContent: center, flex-start, flex-end, space-between, space-around, space-evenly
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'yellow' }}>
            <View style={{ height: 50, width: 50, backgroundColor: 'red' }}></View>
            <View style={{ height: 50, width: 50, backgroundColor: 'green' }}></View>
            <View style={{ height: 50, width: 50, backgroundColor: 'blue' }}></View>
        </View>
    )
}

function exemple9_Centrer_HorizontalAxeSecondaire() {
    // Valeur possible pour jsutifyContent: center, flex-start, flex-end, space-between, space-around, space-evenly
    return (
        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'yellow' }}>
            <View style={{ height: 50, width: 50, backgroundColor: 'red' }}></View>
            <View style={{ height: 50, width: 50, backgroundColor: 'green' }}></View>
            <View style={{ height: 50, width: 50, backgroundColor: 'blue' }}></View>
        </View>
    )
}

function exemple91_Reverse() {
    // Valeur possible pour jsutifyContent: center, flex-start, flex-end, space-between, space-around, space-evenly
    return (
        <View style={{ flex: 1, flexDirection: 'row-reverse', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'yellow' }}>
            <View style={{ height: 50, width: 50, backgroundColor: 'red' }}></View>
            <View style={{ height: 50, width: 50, backgroundColor: 'green' }}></View>
            <View style={{ height: 50, width: 50, backgroundColor: 'blue' }}></View>
        </View>
    )
}

export default DemoFlex
