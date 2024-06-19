import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import {moderateScale, scale} from '../Screens/responsiveSize';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { setDummyData } from '../Redux/actions';
import DeleteMessage from './DeleteMessage';

const Card = ({data}) => {

  const [popUpShow, setpopUpShow] = useState(false)
  const [currentId, setCurrentId] = useState('')

  const dummyData = useSelector(state=>{
    return state.Data
  })

  const deleteData = (Id) => {
    const Delete = dummyData?.payload?.filter((v)=>{
      return v?.id != Id
    })
    setpopUpShow(false)
    setDummyData(Delete);
  };

  const renderCard = ({item}) => {
    return (
      <View style={style.mainContainer}>
        <View style={style.headerContainer}>
          <Text style={[style?.cardTitleText]}>{item?.id}.  {item?.title}</Text>
          <TouchableOpacity
            hitSlop={{top: 5, left: 5, right: 5, bottom: 5}}
            onPress={() => {
              setpopUpShow(true)
              setCurrentId(item?.id);
            }}>
            <Icon name="trash-o" size={25} color="#000" />
          </TouchableOpacity>
        </View>
        <Text style={style?.normalText}>{item?.body}</Text>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#fff'}}>
      <DeleteMessage Show={popUpShow} Delete={e=>deleteData(currentId)} Cancle={e => setpopUpShow(e)}/>
      <FlatList data={dummyData?.payload} renderItem={renderCard} />
    </View>
  )
};

const style = StyleSheet.create({
  mainContainer: {
    padding: moderateScale(10),
    margin: moderateScale(10),
    borderRadius: moderateScale(10),
    borderRadius: 12,
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOpacity: 0.4,
    shadowRadius: 30,
    shadowOffset: {width: 10, height: 2},
    backgroundColor: '#fff',
    elevation: 10,
    marginTop: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitleText: {
    fontSize: scale(13),
    fontWeight: '700',
    width: '90%',
    color: '#000'
  },
  normalText: {
    fontSize: scale(10),
    fontWeight: '400',
    marginTop: moderateScale(4),
    color: '#000'
  },
});

export default Card;
