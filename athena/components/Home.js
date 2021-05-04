import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import Item from './Item'


const Home = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Welcome,{"\n"}Person.</Text>
            <Text style={styles.secondary}>Recent tasks...</Text>
            <View style={styles.displayItems}>
                <Item 
                isProject={false}
                title={'Connect to firebase database'}
                secondary={'Manhattan project'}
                color={'#6A79FF'}
                />
                <Item 
                isProject={false}
                title={'Refactorize the whole project'}
                secondary={'Weather App'}
                color={'#FF6AA5'}
                />
                <Item 
                isProject={false}
                title={'Refactorize the whole project'}
                secondary={'Pokemon App'}
                color={'#EFFF6A'}
                />
            </View>

            <Text style={styles.secondary}>Your projects</Text>
            <View style={styles.displayItems}>
                <Item 
                isProject={true}
                title={'Project Manhattan'}
                secondary={'13 tasks left'}
                color={'#6A79FF'}
                />
                <Item 
                isProject={true}
                title={'Weather App'}
                secondary={'6 tasks left'}
                color={'#FF6AA5'}
                />
                <Item 
                isProject={true}
                title={'Pokemon App'}
                secondary={'42 tasks left'}
                color={'#EFFF6A'}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B1B1B',
        padding: '5%'
    },
    title: {
        marginTop: 24,
        marginBottom: 24,
        fontSize: 48,
        fontWeight: 'bold',
        color: 'white'
    },
    secondary: {
        fontSize: 22,
        color: 'white',
    },
    displayItems: {
        borderRadius: 6,
        marginTop: 8,
        marginBottom: 16,
        backgroundColor: '#D4D4D4'
    }
})

export default Home
