import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
    /*render a default property to Navbar title and icon props*/
    static defaultProps = {
        title: ' Github Finder',
        icon: 'fab fa-github',
    };
    /*propTypes requires that a string is passed to Navbar title and icon*/
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div className='navbar bg-primary'>
                <h1>
                    {/*uses props to render icon and title*/}
                    <i className={this.props.icon}/>{this.props.title}</h1>
            </div>
        );/*end of return*/
    }/*end of render*/
}/*end of class*/

export default Navbar;