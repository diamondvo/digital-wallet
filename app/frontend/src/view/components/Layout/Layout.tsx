import React from 'react';
import ServiceError from 'src/view/pages/ServiceError';
import { StyledLayoutContainer } from './Layout.style';
import { Route, Switch } from 'react-router';
import { pagesConfig, PAGE_ID, privatePagesConfig } from 'src/config/pageConfig';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { STORAGE_VALUES } from 'src/constants';

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

const PrivateRoute: React.FC<{ children: React.ReactNode, path: string }> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          sessionStorage.getItem(STORAGE_VALUES.TOKEN)
            ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: PAGE_ID.LOGIN_PAGE,
                  state: { from: location }
                }}
              />
            ))
      }
    />
  );
}

export const Layout: React.FC = () => {
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
          {
            privatePagesConfig.map(page => {
              const PageComponent = page.Component;
              return <PrivateRoute key={page.id} path={PAGE_ID[page.id]}>
                <PageComponent title={page.title}/>
              </PrivateRoute>
            })
          }
        </Switch>
      </BrowserRouter>
    </PageContainer>
  </StyledLayoutContainer>
}