import React from 'react'
import Profile from './components/Profile'
import ListUser from './components/ListUser'
import LIstProduct from './components/LIstProduct'
import Counter from './components/Counter'
import RandomNumber from './components/RandomNumber'
import ChangeState from './components/ChangeState'
import ThemeToggle from './components/ThemeToggle'
import Login from './components/BT9-10/Login'

export default function App() {
  return (
    <div>
      <Profile/>
      <ListUser/>
      <LIstProduct/>
      <Counter/>
      <RandomNumber/>
      <ChangeState/>
      <ThemeToggle/>
     
    </div>
  )
}
