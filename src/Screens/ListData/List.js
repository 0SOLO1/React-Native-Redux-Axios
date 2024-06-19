import { View, Text } from 'react-native'
import React from 'react'
import Style from './Style'
import Card from '../../Components/Card'
import { useSelector } from 'react-redux'

const List = () => {

  return (
    <View style={Style.mainContainer}>
      <Card/>
    </View>
  )
}

export default List