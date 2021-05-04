import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView, TouchableHighlight} from 'react-native'
import Item from './Item'
import DisplayItems from './DisplayItems'
import firestore from '@react-native-firebase/firestore';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';


const getProjects = async () => {
    const projects = await firestore()
        .collection('projects')
        .get();
        console.log(projects._docs)
}

const Home = () => {

    const [tasks, setTasks] = useState([
        {id:1, 
        description: 'Connect to firebase database', 
        project:'Manhattan project', 
        color:'#6A79FF'},

        {id:2, 
        description: 'Refactorize the whole project', 
        project:'Weather App', 
        color:'#FF6AA5'},

        {id:3, 
        description: 'Refactorize the whole project', 
        project:'Pokemon App', 
        color:'#EFFF6A'},
    ])

    const [projects, setProjects] = useState([
        {id:1, 
        description: 'Manhattan project', 
        project:'13 tasks remaining', 
        color:'#6A79FF'},

        {id:2, 
        description:'Weather App', 
        project:'1 task remaining', 
        color:'#FF6AA5'},

        {id:3, 
        description: 'Pokemon App', 
        project:'42 tasks remaining', 
        color:'#EFFF6A'},
    ])

    useEffect(() => {
        getProjects()
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Welcome,{"\n"}Person.</Text>
            <DisplayItems title={"Recent tasks..."} isProject={false} items={tasks}/>
            <DisplayItems title={"Your projects"} isProject={true} items={projects}/>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B1B1B',
        padding: '5%',
    },
    title: {
        marginTop: 24,
        marginBottom: 24,
        fontSize: 48,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default Home
