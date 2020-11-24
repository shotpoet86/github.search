import React, {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

class App extends Component {
    render() {
        return (
            <div>
                {/*render Navbar class props*/}
                <Navbar/>
                <UserItem/>
            </div>
        );
    }/*end of render*/
}/*end of class*/

export default App;
