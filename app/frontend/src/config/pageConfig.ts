import React from 'react';
import Home from 'src/view/pages/Home/Home';
import Login from 'src/view/pages/Login';
import Sending from 'src/view/pages/Sending';
import ServiceError from 'src/view/pages/ServiceError';

export interface PageProps {
  title: string;
}

export type PageConfigType = {
  id: string;
  title?: string;
  Component: React.FC<PageProps>;
}

export const PAGE_ID = {
  HOME_PAGE: '/',
  LOGIN_PAGE: '/login',
  SENDING_PAGE: '/send',
  GENERIC_ERROR_PAGE: '/error',
}

export const pagesConfig: Array<PageConfigType> = [
  {
    id: PAGE_ID.LOGIN_PAGE,
    Component: Login
  },
  {
    id: PAGE_ID.GENERIC_ERROR_PAGE,
    Component: ServiceError,
  },
]

export const privatePagesConfig: Array<PageConfigType> = [
  {
    id: PAGE_ID.SENDING_PAGE,
    Component: Sending,
  },
  {
    id: PAGE_ID.HOME_PAGE,
    Component: Home,
  },
  
]