import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import MenuList from './components/MenuList'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <div>
        <MenuList />
      </div>
    </ApolloProvider>

  )
}

export default App
