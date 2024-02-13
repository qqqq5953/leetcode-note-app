import { useState } from 'react'
// import { Button } from './components/ui/button'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <main className='p-4'>
        <Outlet></Outlet>
      </main>
    </>
  )
}

export default App
