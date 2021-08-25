import React from 'react';
import { Alert, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { Button, LinearProgress } from 'react-native-elements';
import { useFonts } from 'expo-font';
import { Raleway_700Bold } from '@expo-google-fonts/raleway';

import { queryRepo } from '@services/query';
import Items, { Body } from '@components/Items';
import { Container, Header, Description } from './styles';

interface IBody {
  node: Omit<Body, 'liked'>;
}

export interface Edges {
  edges: IBody[];
}

type TrendingProps = Record<'search', Edges>;

const Trending: React.FC = () => {
  const [fontLoaded] = useFonts({ Raleway_700Bold });
  const { loading, data, error, refetch } = useQuery(queryRepo);

  if (!fontLoaded) {
    return <LinearProgress color="primary" variant="indeterminate" />;
  }

  if (loading) {
    return (
      <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
        <LinearProgress color="secondary" variant="indeterminate" />
      </Container>
    );
  }
  if (error) {
    Alert.alert('Error', error.message);
    return (
      <Container>
        <Description>
          Ops! Erro interno do servidor. Tente novamente.
        </Description>
        <Button onPress={refetch}>Retry</Button>
      </Container>
    );
  }
  const newData: TrendingProps = data;

  return (
    <Container>
      <Header>Trending</Header>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 80, margin: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {newData.search.edges.map(item => (
          <Items key={item.node.id} {...item.node} />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Trending;
