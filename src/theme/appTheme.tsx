import { StyleSheet } from 'react-native';
export const colorsTheme = StyleSheet.create({
    primaryTextColor: {
        color: "#3B3B3B"
    },
    secondaryTextColor: {
        color: "#FF4F5A"
    },
    thirdTextColor: {
        color: "#9D9B9B"
    },
    primaryBackgroundColor: {
        backgroundColor: "#F54C56"
    },
    secondaryBackgroundColor: {
        backgroundColor: "#9D9B9B"
    },
    thirdBackgroundColor: {
        backgroundColor: "#F5F5F5"
    }

});

export const globalTheme = StyleSheet.create({
    gloabalHorizontalMargin:{
        marginHorizontal: 25
    },
    centuryText: {
        fontFamily: 'Century-Gothic'
    },
    centuryBoldText: {
        fontFamily: 'Century-GothicBold'
    },
    centuryBoldItalicText: {
        fontFamily: 'Century-GothicBoldItalic'
    },
    centuryItalicText: {
        fontFamily: 'Century-GothicItalic'
    },
    formContainer:{
        marginTop: 20
    },
    inputContainer:{
        ...colorsTheme.thirdBackgroundColor,
        ...colorsTheme.thirdTextColor,
        paddingHorizontal: 5,
        height: 50,
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 10
    },
    inputText: {
        ...colorsTheme.primaryTextColor,
        flex: 1,
        marginRight: 10
    },
    inputIcon: {
        marginHorizontal: 10,
        fontSize: 20
    },
    inputIconImage: {
        marginLeft: 10,
        marginRight: 5,
        width: 20,
        height: 20
    },
    primaryButtom: {
        height: 50,
        borderRadius: 20,
        backgroundColor: "#F54C56",
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
    },
    primaryLink: {
        width: '100%',
        height: 20,
        justifyContent: 'center',
        alignItems: "center",
    },
    primaryButtomOutLine: {
        height: 50,
        borderRadius: 20,
        borderColor: "#F54C56",
        borderWidth: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
    },
    profileImageContainer: {
        justifyContent: 'center',
        alignItems: "center",
        marginVertical: 20
    },
    profileImage:{
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#F54C56'
        
    },
});