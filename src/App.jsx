import './App.css'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Instructions from './components/instructions'
import Invoices from './components/Invoices'
import AddInstructionDocument from './components/AddInstructionDocument'
import ServeDetails from './components/serveDetails'
import RecipientDetails from './components/RecipientDetails'
import ServiceType from './components/ServiceType'
import PaymentMethod from './components/PaymentMethod'
import Confirmation from './components/Confirmation'
import UpdateProfile from './components/UpdateProfile'
import UpdatePassword from './components/UpdatePassword';
import ChatUI from './components/ChatUi';
import NotificationsPage from './components/NotificationsPage';
import SearchPage from './components/SearchPage';

function App() {



  return (
    <Router>
      <Routes>
       <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/instructions' element={<Instructions/>}/>
      <Route path='/invoices' element={<Invoices />}/>
      <Route path='/instruction/add/document' element={<AddInstructionDocument/>}/>
      <Route path='/instruction/serve/details' element={<ServeDetails/>} />
      <Route path='/instruction/recipient/details' element={<RecipientDetails/>} />
      <Route path='/instruction/service/type' element={<ServiceType/>} />
      <Route path='/instruction/payment/method' element={<PaymentMethod/>} />
      <Route path='/instruction/confirmation' element={<Confirmation/>} />
      <Route path='/update/profile' element={<UpdateProfile/>} />
      <Route path='/update/password' element={<UpdatePassword/>} />
      <Route path='/chats' element={<ChatUI/>} />
      <Route path='/notifications' element={<NotificationsPage/>} />
      <Route path='/search/Results' element={<SearchPage/>} />
      

</Routes>
    </Router>
  )
}

export default App
