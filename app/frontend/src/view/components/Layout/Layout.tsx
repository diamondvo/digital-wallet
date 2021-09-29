import React, { Suspense } from 'react';
import ServiceError from 'src/view/pages/ServiceError';
import { StyledLayoutContainer } from './Layout.style';
import { Route, Switch } from 'react-router';
import { pagesConfig, privatePagesConfig } from 'src/config/pageConfig';
import { BrowserRouter, Redirect } from 'react-router-dom';

export type LayoutProps = {
  rootNode: HTMLElement
}

export interface BasicFCProps {
  children?: React.ReactNode;
  isLoading?: boolean;
  isError?: boolean
}

export const PageContainer: React.FC<BasicFCProps> = ({ children, isError }) => {
  if (isError) {
    return <ServiceError />
  }
  return <main id="main-div">{children}</main>
}

const PrivateRoute: React.FC<{ children: React.ReactNode, isAuthenticated: boolean,  path: string }> = ({ children, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          isAuthenticated
            ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: location }
                }}
              />
            ))
      }
    />
  );
}

const ProtectedRoutes = () => (
  <Switch>
    <Suspense
      fallback={<div>...Loading</div>}
    >
      {
        privatePagesConfig.map(page => {
          const PageComponent = page.Component;
          const title = page.title;
          return <Route path={page.id} key={page.id} exact>
              <PageComponent title={title} />
          </Route>
        })
      }
    </Suspense>
  </Switch>
);

export const Layout: React.FC = () => {
  const isAuthenticated = sessionStorage.getItem('token') && true;
  return <StyledLayoutContainer>
    <PageContainer>
      <BrowserRouter>
        <Switch>
          {
            pagesConfig.map(page => {
              const PageComponent = page.Component;
              const title = page.title;
              return <Route path={page.id} key={page.id} exact>
                  <PageComponent title={title} />
              </Route>
            })
          }
          <PrivateRoute
            path="/"
            isAuthenticated={isAuthenticated}
          >
            <ProtectedRoutes />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </PageContainer>
  </StyledLayoutContainer>
}