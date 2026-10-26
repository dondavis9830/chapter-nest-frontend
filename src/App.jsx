
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/User/Pages/Home'
import Contact from './assets/User/Pages/Contact'
import Books from './assets/User/Pages/Books'
import Auth from './assets/Pages/Auth'
import ProfilePage from './assets/User/Pages/ProfilePage'
import View from './assets/User/Pages/View'
import PaymentSuccess from './assets/User/Pages/PaymentSuccess'
import PaymentFail from './assets/User/Pages/PaymentFail'
import AdminDashboard from './assets/Admin/Pages/AdminDashboard'
import AdminResourses from './assets/Admin/Pages/AdminResourses'
import AdminSettings from './assets/Admin/Pages/AdminSettings'
import Pnf from './assets/Pages/Pnf'
import Header from './assets/User/Components/Header'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister/>}/>

        {/* role user */}
        <Route path='/profile/:id' element={<ProfilePage/>}/>
        <Route path='/books/:id' element={<View/>}/>
        <Route path='/success' element={<PaymentSuccess/>}/>
        <Route path='/cancel' element={<PaymentFail/>}/>

        {/* role admin */}
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/admin/resourses' element={<AdminResourses/>}/>
        <Route path='/admin/settings' element={<AdminSettings/>}/>

        <Route path='*' element={<Pnf/>}/>

      </Routes>
    </>
  )
}

export default App
