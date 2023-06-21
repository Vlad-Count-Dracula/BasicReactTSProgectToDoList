import { FC, useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import NavBar from "./Component/NavBar"
import s from './App.module.css'
import RouterComponent from "./Component/RouterComponent"
import { AuthContext } from "./Context"


export interface itemType {
  userId?: any
  id: any,
  title: string,
}

export interface optionsType {
  value: string
  name: string
}

export interface searchType {
  selectedSort: string
  searchValue: string
}

export interface pagination {
  page: any
  limit: number
  commonPages: number
}

export interface authLogin {
  isLogin : boolean
  setIsLogin : any
}

const App: FC = () => {

 useEffect(() => {
  if(localStorage.getItem('auth')) {
    setIsLogin(true)
  }
 }, [])

 const [isLogin, setIsLogin] = useState(false);


  return (
    <div className={s.container}>
      <AuthContext.Provider value={{
        isLogin,
        setIsLogin,
      }} >
      <BrowserRouter >
        <NavBar />
        <RouterComponent />
      </BrowserRouter>
      </AuthContext.Provider>
    </div>
  )
}



export default App;

