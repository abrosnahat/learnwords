import React from 'react';
import s from './HeaderBlock.module.scss';
import HeaderLogo from './logo2.png';

const HeaderBlock = ({ title, descr }) => {
    return (
        <div className={s.cover}>
            <div className={s.wrap}>
                {title && <h1 className={s.header}>{title}</h1>}
                <img src={HeaderLogo} alt="logo" />
                {descr && <p className={s.descr}>{descr}</p>}
            </div>
        </div>
    );  
}

export default HeaderBlock;
