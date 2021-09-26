import React from 'react';
import ServiceError from 'src/view/pages/ServiceError';
import { StyledContentContainer, StyledLayoutContainer } from './Layout.style';
import { Route, Switch } from 'react-router';
import { pagesConfig } from 'src/config/pageConfig';
import { BrowserRouter } from 'react-router-dom';

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

export const Layout: React.FC = () => {
  return <StyledLayoutContainer>
    {/*  TODO: need to update later */}
    <PageContainer>
      <BrowserRouter>
        <Switch>
          {
            pagesConfig.map(page => {
              const PageComponent = page.Component;
              const title = page.title;
              return <Route path={page.id} key={page.id} exact>
                <StyledContentContainer>
                  <PageComponent title={title}/>
                </StyledContentContainer>
              </Route>
            })
          }
        </Switch>
      </BrowserRouter>
    </PageContainer>
  </StyledLayoutContainer>
}