import TopNavbar from "./components/navbar/TopNavbar";
import { Home } from "./components/home/Home"
import { Footer } from "./components/footer/Footer"
import SignUp from "./components/signup/SignUp"
import SignIn from "./components/sign-In/SignIn"
import Sidebar from "./components/dashboard/Sidebar"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Service from "./components/services/Service";
import Cources from "./components/courses/Cources";
import Amazon from "./components/courses/Amazon";
import Graphic from "./components/courses/Graphic";
import Marketing from "./components/courses/Marketing";
import Seo from "./components/courses/Seo";
import Web from "./components/courses/Web";
import { Gallery } from "./components/gallery/Gallery";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {

  let cu = useSelector(store => store.userSection.cu)
  let dispatch = useDispatch();

  useEffect(function () {

    axios.post('/session', { token: localStorage.getItem('meraToken') }).then(function (res) {
      if (res.data) {
        dispatch({
          type: "LOGIN_USER",
          payload: res.data
        })
      }
    })

  }, [])

  return <div className="main_body">

    <BrowserRouter>
      {cu.email != "asd@gmail.com" &&
        < TopNavbar />

      }
      <main>
        <Routes>

          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/signin" element={<SignIn />}></Route>
          <Route exact path="/dashboard" element={<Sidebar />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/gallery" element={<Gallery />}></Route>
          <Route exact path="/service" element={<Service />}></Route>
          <Route exact path="/course" element={<Cources />}></Route>
          <Route exact path="/amazon" element={<Amazon />}></Route>
          <Route exact path="/graphic" element={<Graphic />}></Route>
          <Route exact path="/marketing" element={<Marketing />}></Route>
          <Route exact path="/seo" element={<Seo />}></Route>
          <Route exact path="/web" element={<Web />}></Route>

        </Routes>

        {cu.email != "asd@gmail.com" &&
          <Footer />
        }

      </main>

    </BrowserRouter>
    <ToastContainer></ToastContainer>


  </div>

}

export default App;
