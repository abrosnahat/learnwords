import React from 'react';
import s from './FooterBlock.module.scss';
import HeaderLogo from '../HeaderBlock/logo2.png';

const FooterBlock = ({ text }) => {
    return (
        <div className={s.container}>
            <img src={HeaderLogo} alt="logo" />
            <p className={s.text}>{text}</p>
        </div>
    );  
}

export default FooterBlock;
