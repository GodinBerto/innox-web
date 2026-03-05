declare namespace NodeJS {
  export interface ProcessEnv {
    TEST: 'staging' | 'production' | 'development';
    API_BASE_URL: string;
  }
}
