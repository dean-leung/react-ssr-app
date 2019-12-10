import React from 'react'

const App: React.FC = () => {
  const handleClick = () => {
    console.log('Test Click')
  }

  return (
    <>
      <h1>Hello React SSR APP!!!</h1>
      <button onClick={handleClick}>Test Click</button>
    </>
  )
}

export default App
