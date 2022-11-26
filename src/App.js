import React from "react";
import {View, Text, FlatList, StyleSheet, Image, Dimensions, SafeAreaView, TextBase, TextInput} from 'react-native';
import Products from './patistore.json'
import styles from './App.style.js' 

const Main = () => {
    return(
        <View style={styles.mainScreen}>
            <Text style={styles.banner}>
                PATIKASTORE
            </Text>
            <TextInput placeholder=" Ara..." style={styles.searchBar}></TextInput>
            <FlatList
                numColumns={"2"}
                data={Products}
                renderItem={({item}) =>
                    <View style={styles.productView}>
                    
                    <Image
                        source={{uri:item.imgURL}}
                        style={styles.productImage} 
                        />
                    <View style={styles.productInfo}>
                        <Text style={styles.productTitle}>{item.title}</Text>
                        <Text style={styles.productPrice}>{item.price}</Text>
                        {item.inStock == false ? <Text style={styles.productStock}>STOKTA YOK</Text>: null }
                        
                    </View>
                    </View>
                        } //renderItem End
                //flatlist End
             />
           
        </View>
    );
}

export default Main;