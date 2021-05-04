import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Item from './Item'

const DisplayItems = ({isProject, title, items}) => {

    return (
        <View>
            {title ? <Text style={styles.secondary}>{title}</Text> : null}
            <View style={styles.displayItems}>
                {items.map((item, index) => {
                    return(
                        <Item 
                        isProject={isProject}
                        title={item.description}
                        secondary={item.project}
                        color={item.color}
                        key={index}
                        />
                    )
                })}
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
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

export default DisplayItems
