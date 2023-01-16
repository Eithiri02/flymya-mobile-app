import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image, Button } from "react-native";

//image
import CarouselImage from "../../assets/mobile_carousel.png";

const WaySelector = () => {
    const [selectedValue, setSelectedValue] = useState("One Way");

    return (
        <View style={styles.container}>
            <View style={styles.main_container}>
                <View style={styles.container}>
                    <Ways
                        values={[{ way: "One Way" }, { way: "Round Trip" }]}
                        selectedValue={selectedValue}
                        setSelectedValue={setSelectedValue}
                    >
                    </Ways>
                </View>
                {selectedValue == "One Way" ? <OneWayList /> : <RoundTripList />}
            </View>
            <View style={styles.search_button}>
                <Button
                    title="Search"
                    color="#00aeef"
                    onPress={() => alert('Search Button')}
                />
            </View>
            <View>
                <Image source={CarouselImage} style={styles.carousel_image} />
            </View>
        </View>
    );
};

const Ways = ({
    values,
    selectedValue,
    setSelectedValue,
}) => (
    <View style={styles.selected_container}>
        {values.map((value, index) => (
            <View key={index}>
                <TouchableOpacity
                    style={selectedValue == value.way ? styles.waybutton_active : styles.waybutton}
                    onPress={() => setSelectedValue(selectedValue == "One Way" && "Round Trip" || selectedValue == "Round Trip" && "One Way")}
                >
                    <Text style={[styles.text, selectedValue == value.way ? { color: "#03afef" } : { color: "#c1c2c6" }]}>
                        {value.way}
                    </Text>
                </TouchableOpacity>
            </View>
        ))}
    </View>
);

const OneWayList = () => {
    return (
        <View style={styles.container}>
            <TextCommonList titleText="From" infoText="Mandalay" />
            <TextCommonList titleText="To" infoText="Tue, 16 Feb 2021" />
            <TextCommonList titleText="Depature" infoText="Wed, 17 Feb 2021" />
            <TextCommonList titleText="Pax" infoText="1 Adult, 0 Child, 1 Room" />
        </View>
    )
}

const RoundTripList = () => {
    return (
        <View style={styles.container}>
            <TextCommonList titleText="From" infoText="Yangon" />
            <TextCommonList titleText="To" infoText="Tue, 16 March 2021" />
            <TextCommonList titleText="Depature" infoText="Wed, 17 March 2021" />
            <TextCommonList titleText="Pax" infoText="2 Adult, 1 Child, 1 Room" />
        </View>
    )
}

const TextCommonList = ({ titleText, infoText }) => {
    return (
        <View style={styles.info_container}>
            <Text>{titleText}</Text>
            <Text style={styles.info_text}>{infoText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flexDirection: "column",
        backgroundColor: "#ebecf0",
        margin: 20,
        paddingBottom: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        elevation: 5

    },
    container: {
        flexDirection: "column",
    },
    selected_container: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    info_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15
    },
    waybutton: {
        color: "#000",
        minWidth: "50%",
        height: 45,
        backgroundColor: "#ebecf0",
    },
    waybutton_active: {
        color: "#000",
        minWidth: "50%",
        height: 45,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderColor: "#00aeef"

    },
    info_text: {
        fontWeight: "bold",
        fontSize: 18
    },
    search_button: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    },
    carousel_image: {
        width: "95%",
        height: 170,
        alignSelf: "center"
    },
    text: {
        alignSelf: "center",
        padding: 10,
        color: "#000",
        fontSize: 16,
    }
})

export default WaySelector;