import {FunctionComponent} from 'react';
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home";

const App: FunctionComponent = () => {

    return (
        <div className="app height-100vh">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
