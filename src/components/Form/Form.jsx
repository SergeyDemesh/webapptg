import React from 'react';
import './Form.css'

const Form = () => {
    const [country, setCountry] = React.useState('');
    const [city, setCity] = React.useState('');
    const [subject, setSubject] = React.useState('');

    return (
        <div className={"form"}>
            <h3>Введите данные</h3>
            <input className={'input'} type="text" placeholder={'Страна'}/>
            <input className={'input'} type="text" placeholder={'Город'}/>
            <select className={'select'}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;