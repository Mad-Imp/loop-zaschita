import {useState, useCallback, useEffect} from 'react';

const storageName = 'userData'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [role, setRole] = useState(null)
  const [id, setId] = useState(null)

  const login = useCallback((token, role, id) => {
    setToken(token)
    setRole(role)
    setId(id)

    localStorage.setItem(storageName, JSON.stringify({
      token,
      role,
      id
    }))
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setRole(null)
    setId(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))

    if (data && data.token && data.role) {
      login(data.token, data.role, data.id)
    }
  }, [login])

  return {login, logout, token, role, id}
}