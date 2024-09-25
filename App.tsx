import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { useState } from 'react';
import tw from 'twrnc';
import { myColors } from './src/styles/Colors';
import MyKeyboard from './src/components/MyKeyboard';

export default function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={theme}>
      <View style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: myColors.dark }]}>
        
        {/* StatusBar style changes based on the theme */}
        <StatusBar style={theme === 'light' ? 'dark' : 'light'} />

        {/* Switch component with improved positioning */}
        <Switch
          style={tw`absolute top-10 right-5`}  // Position Switch in top-right corner
          value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />

        {/* Keyboard component */}
        <MyKeyboard />
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,  // Light theme background
    alignItems: 'center',
    justifyContent: 'center',
  },
});
