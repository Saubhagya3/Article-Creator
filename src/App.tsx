import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import TabComponent from './Components/TabComponent';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <div style={{textAlign: "center"}}>
      <ApolloProvider client={client}>
            <TabComponent />
      </ApolloProvider>
    </div>
  );
}

export default App;
