
import './App.css'
import { Header } from './comp/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WorkBoard from './pages/WorkBoard'

function App() {

  return (
    <>
      <Header />
      <h1>TEST APP </h1>
      <Routes>
        <Route path='/' element={
          <Home />
        } />

        <Route path='/wboard' element={ <WorkBoard /> } />
      </Routes>
    </>
  )
}

export default App
