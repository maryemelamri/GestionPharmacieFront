import 'tailwindcss/tailwind.css';

import './App.css';
import Header from './Components/Layout/Header.js';
import Footer from './Components/Layout/Footer';
import {CityForm,CityList ,VilleForm, VilleLists}  from "./Components/Pages/VilleList";
import Pharmacy from "./Components/Pages/Pharmacie";
import {ZoneLists, ZoneForm}  from "./Components/Pages/ZoneList";
import LoginForm from "./Components/auth/loginPage";
import Home from "./Components/Pages/Home";




import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react';
import WithSubnavigation from "./Components/Layout/navBar";


function App() {
  return (
      <div>
        {/*<Header/>*/}
          <ChakraProvider>
            <WithSubnavigation/>
          </ChakraProvider>
      <BrowserRouter>

          <div>

              <Routes>
                  <Route path="/ville" element={<VilleLists />}></Route>
                  <Route path="/zone" element={<ZoneLists />}/>
                  <Route path="/pharmacie" element={<Pharmacy />}>
                  </Route>
                  <Route path="/creationVille" element={<VilleForm />} />
                  <Route path="/creationZone" element={<ZoneForm />} />
                  <Route path="/" element={<Home/>} />
                  <Route path="/login" element={<LoginForm/>} />

                  {/*<Route path="/create-zone" element={<ZoneForm />} />*/}
                  {/*<Route path="/zoneByCity" element={<ZoneByCity />} />*/}

              </Routes>

          </div>
      </BrowserRouter>

      <ChakraProvider>
        <Footer/>
      </ChakraProvider>


      </div>
  );
}

export default App;