import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar'
import { UserProvider } from './context/UserContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center',
      height: '80vh',
      width: '100vw',
      padding: '20px',
  
    }}
    
    >
      <UserProvider>
      
      
          <Navbar/>
      
    </UserProvider>
    </main>
  )
}

export default App
