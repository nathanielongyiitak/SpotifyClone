import { API, graphqlOperation } from 'aws-amplify';
import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AlbumCategory from '../components/AlbumCategory';
import { View } from '../components/Themed';
import { listAlbumCategorys } from '../graphql/queries';


export default function TabOneScreen() {
  const [categories, setCategories] = React.useState([])

  React.useEffect(() => {
    const fetchAlbumCategories = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listAlbumCategorys))
        setCategories(data.data.listAlbumCategorys.items)
      } catch (e) {
        console.log('fetchAlbumCategories error: ' + e)
      }
    }

    fetchAlbumCategories()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) =>
          <AlbumCategory title={item.title} albums={item.albums.items} />
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
