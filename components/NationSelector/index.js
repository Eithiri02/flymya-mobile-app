import React, { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { View, Text, StyleSheet, Radio } from "react-native";

const NationSelector = () => {

    const [radioButtons, setRadioButtons] = useState([
        {
            id: '1',
            label: 'Yes',
            value: 'option1'
        },
        {
            id: '2',
            label: 'No',
            value: 'option2'
        }
    ]);

    const onPressRadioButton = (radioButtonsArray) => {
        setRadioButtons(radioButtonsArray);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.optionLabel}>
                Myanmar Citizen
            </Text>
            <RadioGroup
                radioButtons={radioButtons}
                onPress={onPressRadioButton}
                size={14}
                layout="row"
                selected={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ebecf0",
        padding: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 15,
        marginLeft: 20,
        marginRight: 20,
        zIndex: 20
    },
    optionLabel: {
        fontSize: 18,
        paddingTop: 3,
        color: "#000",
        fontWeight: "bold"
    }
})

export default NationSelector;