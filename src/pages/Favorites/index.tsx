import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Raleway_700Bold } from '@expo-google-fonts/raleway';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Items, { Body } from '@components/Items';
import { useNavigation } from '@react-navigation/native';
import { Container, Header } from './styles';

const renderItem: ListRenderItem<Body> = ({ item }) => {
  return (
    <Items
      name={item.name}
      description={item.description}
      forkCount={item.forkCount}
      stargazerCount={item.stargazerCount}
      primaryLanguage={item.primaryLanguage}
      liked
    />
  );
};

const Favorites = (): JSX.Element => {
  const navigation = useNavigation();
  const [fav, setFav] = React.useState<any>([]);

  React.useEffect(() => {
    async function getData(): Promise<void> {
      const jsonValue = await AsyncStorage.getItem('@teste');
      jsonValue != null ? setFav([...fav, JSON.parse(jsonValue)]) : null;
    }
    getData();
  }, [navigation]);

  const [fontsLoaded] = useFonts({ Raleway_700Bold });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Container>
      <Header>Favorites</Header>
      <FlatList
        data={fav}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={(
          <Container>
            <Header>Você não favoritou nenhum repo ainda :(</Header>
          </Container>
        )}
      />
    </Container>
  );
};

export default Favorites;
