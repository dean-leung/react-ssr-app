import React, {useState} from 'react'

const Home: React.FC = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(true)
  }

  return (
    <div>
      <h2>This is home page.</h2>
      <button onClick={handleClick}>Click Me</button>
      {show && <div>You clicked me.</div>}
    </div>
  )
}

export default Home
