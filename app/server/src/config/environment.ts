type EnvironmentType = {
  [key: string]: any;
}

export const environment: EnvironmentType = {
  LISTENER_PORT: 5000,
  IS_DEVELOPMENT_MODE: process.env.NODE_ENV === 'development'
}