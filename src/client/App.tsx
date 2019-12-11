import React, { useState } from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'

const App: React.FC<RouteConfigComponentProps> = ({ route }) => {

  return (
    <>
      <h1>Hello React SSR APP!!!</h1>
      <main>
        {route && renderRoutes(route.routes)}
      </main>
    </>
  )
}

export default App
