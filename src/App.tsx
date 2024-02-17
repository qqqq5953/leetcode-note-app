// import { useState } from 'react'
// import { Button } from './components/ui/button'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header></Header>
      <main className='p-4 grow flex flex-col'>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default App
