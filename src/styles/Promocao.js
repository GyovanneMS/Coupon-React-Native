import { StyleSheet } from "react-native";

export default StyleSheet.create({
    desconto: {
        margin: 16
    },
    descontoImagem:{
        borderRadius: 32,
        height: 300,
        overflow: "hidden",
        width: "auto"
    },
    descontoTitulo:{
        fontSize: 20,
        marginVertical: 16,
        textAlign: "center"
    },
    descontoDados: {
        color: "red",
        fontSize: 24,
        paddingHorizontal: 16,
        textAlign: "right"
    },
    descontoCodigo:{
        backgroundColor: "#222",
        borderRadius: 12, 
        color: "#fff",
        fontSize: 24,
        marginVertical: 16,
        marginHorizontal: 16,
        textAlign: "center"
    }
})