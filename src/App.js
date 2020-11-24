import React, {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import Users from './components/users/Users';

class App extends Component {
    render() {
        return (
            <div>
                {/*render Navbar class props*/}
                <Navbar/>
                <div className="container">
                    <Users/>
                </div>
            </div>
        );
    }/*end of render*/
}/*end of class*/

export default App;
