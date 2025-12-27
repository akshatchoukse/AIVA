import React, { createContext } from 'react'
export const userDataContext = createContext()
function userContext({children}) {
  const serverUrl = "http://localhost:8080"
  const value={
    serverUrl
  }
  return (
    <div>
      <userDataContext.Provider value={value}>
      {children}
      </userDataContext.Provider>
    </div>
  )
}

export default userContext