import React from 'react';
import PropTypes from 'prop-types'

const UserItem = ({user: {avatar_url, login, html_url}}) => {

    /*destructure this.state to save entering each time*/
    return (
        <div className='card text-center'>
            {/*updates avatar_url state with github user avatar*/}
            <img src={avatar_url} alt="github avatar" className='round-img' style={{width: '60px'}}/>
            {/*updates login state with github username*/}
            <h3>{login}</h3>
            <div>
                {/*update html_url state with github user link*/}
                <a href={html_url} className='btn btn-dark btn-sm my-1'>More Info</a>
            </div>
        </div>

    );/*end of return*/

};/*end of class*/
UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem;