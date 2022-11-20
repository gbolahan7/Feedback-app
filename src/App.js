import React from 'react'
// import FeedbackItem from './components/FeedbackItem'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function App() {    
  return (
    <FeedbackProvider>
    <Router>
      <Header/>
        <div className='container'>
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm/>
                <FeedbackStats/>
                <FeedbackList/>
              </>
            }>            
            </Route>
              <Route path='/about' element={<AboutPage/>}/>
          </Routes>
          {/* <AboutPage/> */}
          <AboutIconLink/>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

