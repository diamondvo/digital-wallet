import React from 'react';
import Login from 'src/view/pages/Login';
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
  LOGIN_PAGE: '/login',
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