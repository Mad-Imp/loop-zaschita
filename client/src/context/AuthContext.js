import {createContext} from 'react';

function noop() {}

export const AuthContext = createContext({
  token: null,
  id: null,
  role: null,
  login: noop,
  logout: noop,
  isAuthenticated: false
})