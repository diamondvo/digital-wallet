import ErrorBoundary from 'src/view/components/ErrorBoundary';
import { ThemeProvider } from 'styled-components';
import theme from 'src/config/theme';
import { Layout } from 'src/view/components/Layout/Layout';
import 'antd/dist/antd.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { GlobalProvider } from 'src/view/components/GlobalContext/GlobalContext';

export default function App() {
  
  const client = new ApolloClient({
    uri: 'http://localhost:5000/digital-wallet/graph',
    cache: new InMemoryCache()
  });

  return <ErrorBoundary>
    <ApolloProvider client={client}>
      <GlobalProvider>
        <ThemeProvider theme={theme}>
          <Layout />
        </ThemeProvider>
      </GlobalProvider>
    </ApolloProvider>
  </ErrorBoundary>
}