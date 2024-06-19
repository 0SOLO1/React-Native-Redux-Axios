import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getApiDummyData } from './src/Api'
import { setDummyData } from './src/Redux/actions'
import  configureStore  from './src/Redux/store'
import { NoInternetToast } from './src/Components/NoInternet'
import List from './src/Screens/ListData/List'
import { Provider } from 'react-redux'
import Loder from './src/Components/Loder'

const App = () => {

  const [loader, setloader] = useState(false)
  
  useEffect(()=>{
    dummyData(); 
  },[])

  const dummyData = async () =>{
    setloader(true)
    const data = await getApiDummyData();
    setDummyData(data);
    setloader(false)
  };

  return (
    <Provider store={configureStore}>
        <Loder Start={loader}/>
        <List/>
        <NoInternetToast/>
     </Provider>
  )
}

export default App