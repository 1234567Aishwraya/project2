import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/navbar'
import Home from './navbar/home'
import Contact from './navbar/contact'
import About from './navbar/about'
import Login from './navbar/login';
import Register from './navbar/register';
import Footer from './footer section/footer';
import Delivery from './footer section/delivary';
import CancellationRefund from './footer section/refund';
import PrivacyPolicy from './footer section/privacy';
import TermsConditions from './footer section/conditions';
import WhoWeAre from './footer section/whoweare';
import OurMission from './footer section/ourmission';
import CustomerReviews from './footer section/customer';
import TravelAssistance from './footer section/travel';
import ExclusiveDeals from './footer section/exclusive';
import HotelReservations from './footer section/reservations';






function App() {
 

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/delivary' element={<Delivery/>}/>
    <Route path='/refund' element={<CancellationRefund/>}/>
    <Route path='/privacy' element={<PrivacyPolicy/>}/>
    <Route path='/conditions' element={<TermsConditions/>}/>
    <Route path='/whoweare' element={<WhoWeAre/>}/>
    <Route path='/ourmission' element={<OurMission/>}/>
    <Route path='/customer' element={<CustomerReviews/>}/>
    <Route path='/travel' element={<TravelAssistance/>}/>
    <Route path='/exclusive' element={<ExclusiveDeals/>}/>
    <Route path='/reservations' element={<HotelReservations/>}/>
      </Routes>
      <Footer/>
    </Router>
  
    </>
  )
}

export default App
