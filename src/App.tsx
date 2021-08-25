import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { ApolloProvider } from '@apollo/client';

import Routes from '@routes/index.routes';
import apolloClient from './services/apollo';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

const App: React.FC = () => {
  return (
    // <KeyboardAvoidingView style={styles.container}>
    <>
      <ApolloProvider client={apolloClient}>
        <Routes />
      </ApolloProvider>
    </>
    // </KeyboardAvoidingView>
  );
};

export default App;
