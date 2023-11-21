import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import api from './src/services/api';
import Filmes from './src/Filmes';

export default function appFilmes() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes');
      setFilmes(response.data);
      setLoading(false);
    }

    loadFilmes();
  }, []);

  if (loading) {
    return(
      <View style={{alignItems:'center', justifyContent: 'center', flex: 1}} >
        <ActivityIndicator color='#09a6ff' size={80} />
      </View>
    )

  } else {
    return (
      <View>
        <FlatList
          data={filmes}
          renderItem={({item}) => <Filmes data={item} />}
          keyExtractor={item => String(item.id)}
        />
      </View>
    );
  }
}
