import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Completed from './components/Completed.jsx'
import { TaskProvider } from './context/TaskContext.jsx'
import { Route, Routes } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TaskProvider>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/completed' element={<Completed />} />
      </Routes>
      <Footer />
    </TaskProvider>
  </BrowserRouter>
);
