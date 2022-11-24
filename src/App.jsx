
import './App.css';

import {Route,Routes,Link} from "react-router-dom";
import {Profile} from './profile'
import {Home} from './home'


function App () {
    return (
        <div className="App">
            <header className="App-header">
                <Link to="/">home</Link>
                <Link to="/profile">profile</Link>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="*" element={<Home/>}/>
                </Routes>
            </header>
        </div>
    );
}

export default App;
