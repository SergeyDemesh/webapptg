import React from 'react';
import Button from '../Button/Button';
import { useTg } from '../../hooks/useTg';

const Header = () => {

    const {onClose, user} = useTg()

   

    return (
        <div className={"header"}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={"username"}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;
