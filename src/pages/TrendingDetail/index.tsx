import React from 'react';
import { Card, Text, LinearProgress } from 'react-native-elements';
import { Alert } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { gql, useQuery } from '@apollo/client';

import {
  Container,
  Description,
  NormalText,
  TextContainer,
  Title,
  UrlText,
  Wrapper,
} from './styles';

interface RouteParams {
  id: string;
}

const TrendingDetail: React.FC = () => {
  const { params } = useRoute();
  const routeParams = params as RouteParams;

  const query = gql`
  query {
    node(id: "${routeParams.id}") {
      ... on Repository {
        id
        name
        description
        url
        forkCount
        stargazerCount
        issues {
          totalCount
        }
      }
    }
  }
`;

  const { data, loading, error } = useQuery(query);
  if (loading) {
    return (
      <Container>
        <LinearProgress color="primary" variant="indeterminate" />
        <Text>Loading...</Text>
      </Container>
    );
  }
  if (error) {
    Alert.alert('Error', error.message);
    return <Container />;
  }

  return (
    <Container>
      <Card>
        <Title>{data.node.name}</Title>
        <Card.Divider />
        <Description>{data.node.description}</Description>
        <Wrapper>
          <TextContainer>
            <AntDesign name="staro" color="black" size={16} />
            <NormalText>{data.node.stargazerCount}</NormalText>
          </TextContainer>
          <TextContainer>
            <AntDesign name="fork" color="black" size={16} />
            <NormalText>{data.node.forkCount}</NormalText>
          </TextContainer>
          <TextContainer>
            <FontAwesome name="dot-circle-o" color="green" size={16} />
            <NormalText>{data.node.issues.totalCount}</NormalText>
          </TextContainer>
        </Wrapper>
        <UrlText>{data.node.url}</UrlText>
      </Card>
    </Container>
  );
};

export default TrendingDetail;
