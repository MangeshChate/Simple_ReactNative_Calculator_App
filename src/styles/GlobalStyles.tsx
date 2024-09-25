import { StyleSheet, Dimensions } from "react-native";

// Get screen width to set responsive button sizes
const screenWidth = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
    btnBlue: {
        backgroundColor: '#1E90FF',  // Modern blue for main buttons
        color: '#FFFFFF',            // White text
        width: screenWidth * 0.2,    // 20% of screen width
        height: screenWidth * 0.2,   // Equal width and height for square button
        borderRadius: 15,            // Rounded corners for a modern feel
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',         // Button shadow
        shadowOffset: { width: 0, height: 4 },  // Vertical shadow
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        margin:3   
        
    },
    btnDark: {
        backgroundColor: '#505050',  // Darker gray for secondary buttons
        color: '#FFFFFF',
        width: screenWidth * 0.2,
        height: screenWidth * 0.2,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        margin:3               // Android shadow

    },
    btnLight: {
        backgroundColor: '#F5F5F5',  // Light background for number buttons
        color: '#000000',
        width: screenWidth * 0.2,
        height: screenWidth * 0.2,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        margin:3               // Android shadow

    },
    btnGray: {
        backgroundColor: '#A9A9A9',  // Gray button for operators or function keys
        color: '#FFFFFF',
        width: screenWidth * 0.2,
        height: screenWidth * 0.2,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        margin:3               // Android shadow

    },
    smallTextLight: {
        color: '#F5F5F5',            // Light gray text for dark mode
        fontSize: 25,
    },
    smallTextDark: {
        color: '#121212',            // Dark text for light mode
        fontSize: 25,
    },
    row: {
        flexDirection: 'row',        // Align buttons in a row
        maxWidth:'100%',
        
    
    },
    viewBottom: {
        position:'absolute',
        bottom:50
    },
    screenFirstNumber: {
        color: '#252525',            // Medium gray for small result text
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10,
    },
    screenSecondNumber: {
        color: '#808080',            // White for the main input
        fontSize: 30,
        textAlign: 'right',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
});
