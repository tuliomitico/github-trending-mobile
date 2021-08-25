import styled from 'styled-components/native';
import { Card } from 'react-native-elements';

export const Container = styled.View`
  padding: 0 16px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Card.Title)`
  font-size: 32px;
`;

export const NormalText = styled.Text`
  font-size: 16px;
  margin: 0px 0px 0px 8px;
`;

export const UrlText = styled.Text`
  font-size: 16px;
  color: blue;
  text-decoration: underline;
`;
