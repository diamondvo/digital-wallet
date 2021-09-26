import ErrorBoundary from 'src/view/components/ErrorBoundary';
import { ThemeProvider } from 'styled-components';
import theme from 'src/config/theme';
import { Layout } from 'src/view/components/Layout/Layout';

export default function App() {
  return <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  </ErrorBoundary>
}