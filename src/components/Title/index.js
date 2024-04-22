import React from "react";
import { View, Text } from 'react-native';

import styles from "./styles";

export default function Title() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Estas Sozinho?</Text>
        </View>
    )
}