import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';

import { RoutesContants } from '@routes/constants.routes';
import { storeData } from '@services/store';
import {
  Description,
  TouchbleCard,
  Footer,
  LanguageText,
  Wrapper,
  ForkAndStarText,
} from './styles';

interface Language {
  name?: string;
}

export interface Body {
  liked: boolean;
  id?: string;
  name: string;
  description: string;
  stargazerCount: number;
  primaryLanguage: Language;
  forkCount: number;
}

const Items: React.FC<Body> = props => {
  const {
    liked,
    name,
    description,
    forkCount,
    primaryLanguage,
    id,
    stargazerCount,
  } = props;

  const [favorite, setFavorite] = React.useState<boolean>(liked);
  const [star, setStar] = React.useState<number>(stargazerCount);
  const navigation = useNavigation();

  function handleToggleStar(): void {
    setFavorite(previousState => !previousState);
    if (favorite) {
      setStar(previousState => previousState - 1);
    } else {
      setStar(previousState => previousState + 1);
      storeData({
        name,
        description,
        forkCount,
        primaryLanguage,
        stargazerCount,
      });
    }
  }

  return (
    <Card>
      <TouchbleCard
        onPress={() =>
          navigation.navigate(RoutesContants.TrendingDetail, { id })
        }
      >
        <Card.Title>{name}</Card.Title>
      </TouchbleCard>
      <Card.Divider />
      <Description>{description}</Description>
      <Footer>
        <LanguageText>{primaryLanguage?.name}</LanguageText>
        <Wrapper>
          <TouchableOpacity onPress={handleToggleStar}>
            <AntDesign
              name={favorite ? 'star' : 'staro'}
              size={12}
              color="black"
            />
          </TouchableOpacity>
          <ForkAndStarText>{star}</ForkAndStarText>
        </Wrapper>
        <Wrapper>
          <AntDesign name="fork" size={12} color="black" />
          <ForkAndStarText>{forkCount}</ForkAndStarText>
        </Wrapper>
      </Footer>
    </Card>
  );
};

export default Items;
