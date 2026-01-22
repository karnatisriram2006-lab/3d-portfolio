import {BrowserRouter, Form} from "react-router-dom";
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#050816]">
        <div className="bg-[url('/src/assets/herobg.png')] bg-cover bg-bo-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
