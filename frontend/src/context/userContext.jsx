import React, { createContext } from 'react'

export const userDataContext = createContext()

function UserContext({ children }) {
  const serverUrl = "http://localhost:8080"

  const value = {
    serverUrl
  }

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  )
}

export default UserContext