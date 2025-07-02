import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Skills from './Components/Skills'
import TechStack from './Components/TechStack'
import Projects from './Components/Project'
import Experience from './Components/Experience'
import Education from './Components/Education'
import Certifications from './Components/Certification'
import GitHubStats from './Components/GitHubStack'
import Timeline from './Components/Timeline'
import Testimonials from './Components/Testimonials'
import Blog from './Components/Blog'
import FAQ from './Components/FAQ'
import Newsletter from './Components/Newsletter'
import Contact from './Components/Contact'
import Confetti from './Components/Confetti'
import Footer from './components/Footer';


function App() {


  return (
<>
<BrowserRouter>
<Navigation/>
<Routes>
  <Route path="/" element={
          <> 
          <Hero />             
          <About />             
          <Services />             
          <Skills />             
          <TechStack />             
          <Projects />             
          <Experience />             
          <Education />             
          <Certifications />             
          <GitHubStats />             
          <Timeline />             
          <Testimonials />             
          <Blog />             
          <FAQ />             
          <Newsletter />             
          <Contact />             
          <Confetti />    
          <Footer />         

         </>} />
</Routes>
</BrowserRouter>
</>
  )
}

export default App
