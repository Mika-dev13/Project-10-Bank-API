import './App.css'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { store } from './store/store'
import { Provider } from 'react-redux'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import SignIn from './pages/SignIn'
import User from './pages/User'

function App() {
  return (
    <Provider store={store}>
      <AppBody className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/login" element={<SignIn />} />
          <Route path="/user/profile" element={<User />} />
        </Routes>
        <Footer />
      </AppBody>
    </Provider>
  )
}

export default App

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
