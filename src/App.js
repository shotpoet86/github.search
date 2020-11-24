import React, {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

class App extends Component {
    render() {
        return (
            <div>
                {/*render Navbar class props*/}
                <Navbar/>
            </div>
        );
    }/*end of render*/
}/*end of class*/

export default App;
