import React from 'react';

import style from './header.css';

class Header extends React.Component {
    render() {
        return (
            <header className={style.header}>
                <img src="http://icons-for-free.com/free-icons/png/512/1622833.png" alt="" />

                <ul>
                    <li>
                        Todo
                    </li>
                    <li>
                        Done
                    </li>
                    <li>
                        Deleted
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;
