import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: "auto",
        width: "100%",
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#fff",
    },
    form: {
        width: "100%",
        justifyContent: "space-around",
        flexDirection: "row"
    },
    btn: {
        width: "40%",
        backgroundColor: "#fff",
        paddingVertical: 10,
        borderRadius: 50,
    },
    text: {
        fontSize: 20,
        color: "#f00",
        fontWeight: "bold",
        textAlign: "center",
    },
    video: {
        height: 300,
        alignSelf: "stretch",
    }
});

export default styles