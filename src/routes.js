import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import Links from './pages/links';
import Error from './pages/error';

function RoutesApp() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/links' element={<Links/>}></Route>
            <Route path='*' element={<Error/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;