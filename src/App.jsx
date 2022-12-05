
import './App.css';

import {Route,Routes,Link} from "react-router-dom";
import {Profile} from './profile'
import {Home} from './home'
import {Chat} from './chat'

function App () {
    return (
        <div className="App">
            <header className="App-header">
                <ul>
                    <Link to="/">home</Link>
                </ul>
                <ul>
                    <Link to="/profile">profile</Link>
                </ul>
                <ul>
                    <Link to="/chat">chat</Link>
                </ul>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path={"/chat"} element={<Chat/>}/>
                    <Route path={"/chat/:id"} element={<Chat/>}/>
                    <Route path="*" element={<Home/>}/>
                </Routes>
            </header>
        </div>
    );
}

export default App;
