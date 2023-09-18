export type Envs = {
  NEXT_PUBLIC_API_URL: string;
};

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Envs {}
  }
}

export {};
