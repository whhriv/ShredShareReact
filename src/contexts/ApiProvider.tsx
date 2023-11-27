
import { createContext, useContext } from 'react';
import ShredShareAPI from '../ShredShareAPIClient';

const ApiContext = createContext();

export default function ApiProvider({ children }) {
  const api = new ShredShareAPI();

  return (
    <ApiContext.Provider value={api}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}