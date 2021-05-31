import React from 'react';
import s from './HeaderBlock.module.scss';
import HeaderLogo from './logo2.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { IconButton } from '@material-ui/core';

import FirebaseContext from '../../context/firebaseContext';
class HeaderBlock extends React.Component {

    
    onSignOut = () => {
        const { signOut } = this.context;

        signOut();
    }
    
    render() {
        return (
            <div className={s.cover}>
                <div className={s.wrap}>
                    <img  className={s.logo} src={HeaderLogo} alt="logo" />

                    <div className={s.signout}>
                        <IconButton onClick={this.onSignOut}>
                            <ExitToAppIcon style={{ color: 'white', fontSize: 45 }} />
                        </IconButton>
                    </div>
                    
                </div>
            </div>
        ); 
    } 
}

HeaderBlock.contextType = FirebaseContext;

export default HeaderBlock;
