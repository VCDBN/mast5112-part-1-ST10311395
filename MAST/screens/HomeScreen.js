import React from "react";
import {Text, View,TouchableOpacity, StyleSheet} from 'react-native';

const HomeScreen =() =>{
    return(
        <View style = {{
            height: '100%',
            backgroundColor: 'white', 
            justifyContent: 'center',
            alignItems:'center',
        }}>

            <Text style={{fontSize:40, fontWeight:'bold', letterSpacing:0, position:'absolute', bottom: 880, color:'black'}}>My Book List</Text>
            <Text style ={{fontSize:40, fontWeight:'bold', letterSpacing:0, position:'absolute', bottom: 800, color:'black'}}>Home</Text>
            
            
            <Text style={{fontSize:30, fontWeight:'bold', letterSpacing:0, position:'absolute', bottom: 680, color:'black'}}>You have Recently Read:</Text>
            <Text style={{fontSize:30, letterSpacing:0, position:'absolute', bottom: 640, color:'black'}}>Tile: ###</Text>
            <Text style={{fontSize:30, letterSpacing:0, position:'absolute', bottom: 610, color:'black'}}>Author: ###</Text>
            <Text style={{fontSize:30, letterSpacing:0, position:'absolute', bottom: 580, color:'black'}}>Genre: ###</Text>
            <Text style={{fontSize:30, letterSpacing:0, position:'absolute', bottom: 550, color:'black'}}>Number of pages: ###</Text>
            

            
            <Text style={{fontSize:30, letterSpacing:0, position:'absolute', bottom: 400, color:'black'}}>Total number of Pages read:</Text>
            <Text style={{fontSize:30, letterSpacing:0, position:'absolute', bottom: 350, color:'black'}}>13 000</Text>
           

            
            <Text style={{fontSize:30, letterSpacing:0, position:'absolute', bottom: 250, color:'black'}}>Average number of pages read:</Text>
            <Text style={{fontSize:30, letterSpacing:0, position:'absolute', bottom: 200, color:'black'}}>5800</Text>
            

            <TouchableOpacity style ={styles.addButton}>
                <Text style={styles.buttonText}>+ Add Book</Text>
            </TouchableOpacity>
        </View>
        
    );
};

const styles = StyleSheet.create({
   

    buttonText: {
        alignItems: 'center',
        bottom: -350,
        backgroundColor: 'grey',
        padding: 10,
    },

});


export default HomeScreen;