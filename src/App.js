import './assets/css/estilos.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Body } from './components/pages/Body/Body';



function App() {
  return (
    <>
    <Body/>
    {/* <BrowserRouter>
          <Routes>
            <Route path='/About' element={<MainAbout/>}/>
          </Routes>
    </BrowserRouter> */}
    </>
  )
}

export default App;
