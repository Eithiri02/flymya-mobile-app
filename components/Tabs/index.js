import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

// images
import FlightIcon from "../../assets/flight.png";
import FlightActiveIcon from "../../assets/flightActive.png";
import HotelIcon from "../../assets/hotel.png";
import HotelActiveIcon from "../../assets/hotelActive.png"
import BusIcon from "../../assets/bus.png";
import BusActiveIcon from "../../assets/busActive.png";
import CarIcon from "../../assets/car.png";
import CarActiveIcon from "../../assets/carActive.png";
import BallonIcon from "../../assets/ballon.png";
import BallonActiveIcon from "../../assets/ballonActive.png";
import PromoIcon from "../../assets/promo.png";
import PromoActiveIcon from "../../assets/promoActive.png";

const JustifyContentBasics = () => {

    const [selectedValue, setSelectedValue] = useState("Flights");

    return (
        <Tabs
            values={[
                { image: FlightIcon, activeImage: FlightActiveIcon, name: "Flights" },
                { image: HotelIcon, activeImage: HotelActiveIcon, name: "Hotels" },
                { image: BusIcon, activeImage: BusActiveIcon, name: "Buses" },
                { image: CarIcon, activeImage: CarActiveIcon, name: "Cars" },
                { image: BallonIcon, activeImage: BallonActiveIcon, name: "Ballons" },
                { image: PromoIcon, activeImage: PromoActiveIcon, name: "Promos" },
            ]}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
        />
    );
};

const Tabs = ({
    values,
    selectedValue,
    setSelectedValue
}) => (
    <View style={styles.container}>
        <View style={styles.row}>
            {values.map((value, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => setSelectedValue(value.name)}
                    style={[styles.button]}
                >
                    <Image source={selectedValue == value.name ? value.activeImage : value.image} style={styles.image} />
                    <Text
                        style={[
                            styles.buttonLabel,
                            selectedValue == value.name ? { color: "#03afef" } : { color: "#000" }
                        ]}
                    >
                        {value.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 10,
        flex: 1,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    button: {
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: "#fafafa",
        marginHorizontal: "1%",
        marginBottom: 30,
        minWidth: "30%",
        textAlign: "center",
    },
    selected: {
        backgroundColor: "coral",
        borderWidth: 0,
    },
    buttonLabel: {
        fontSize: 14,
        fontWeight: "500",
        color: "#000",
        textAlign: "center"
    },
    selectedLabel: {
        color: "white",
    },
    label: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 24,
    },
    image: {
        alignItems: "center",
        alignSelf: "center",
        width: 50,
        height: 40,
    }
});

export default JustifyContentBasics;