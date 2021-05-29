import React from 'react';
import s from './HeaderBlock.module.scss';
import HeaderLogo from './logo2.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { IconButton, ButtonGroup, Button } from '@material-ui/core';

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

                    <ButtonGroup disableElevation variant="contained" color="primary">
                        <Button size="large">Карточки</Button>
                        <Button size="large">Тест</Button>
                    </ButtonGroup>

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
