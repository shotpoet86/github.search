import React, {Component} from 'react';

class UserItem extends Component {
    /*beginning state of UserItem class*/
    state = {
        id: 1,
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo',
    };

    render() {
        /*destructure this.state to save entering each time*/
        const {avatar_url, login, html_url} = this.state;
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
    }/*end of render*/
}/*end of class*/

export default UserItem;