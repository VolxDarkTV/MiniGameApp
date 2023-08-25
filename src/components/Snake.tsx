import React, { Fragment } from "react";
import { Coordinate } from "../types/types";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface SnakeProps {
    snake: Coordinate[];
}

export default function Snake({ snake }: SnakeProps): JSX.Element {
    return (
        <Fragment>
            {snake.map((segment: Coordinate, index: number) => {
                const segmentStyle = {
                    left: segment.x * 10,
                    top: segment.y * 10,
                };
                return (
                    <View key={index} style={[styles.snake, segmentStyle]}>
                        <LinearGradient
                            colors={['#FF5733', '#FFC300']}
                            style={{ flex: 1, borderRadius: 7 }}
                        />
                    </View>
                );
            })}
        </Fragment>
    );
}

const styles = StyleSheet.create({
    snake: {
        width: 15,
        height: 15,
        position: "absolute",
    }
});
