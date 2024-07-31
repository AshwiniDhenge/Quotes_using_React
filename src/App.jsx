import { useState } from 'react'

import Quotes1 from './assets/component/Quotes1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Quotes1/>
    </>
  )
}

export default App
