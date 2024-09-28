import React, {useCallback, useEffect} from 'react';
import './Form.css'
import {useTg} from "../../hooks/useTg";

const Form = () => {
    const [country, setCountry] = React.useState('');
    const [city, setCity] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const {tg} = useTg()

    const onSendData = useCallback(() => {
        const data = {
            country: country,
            city: city,
        }
        tg.sendData(JSON.stringify(data))
    }, [country, city])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, []);

    useEffect(() => {
        tg.MainButton.setParams({
            'text': 'Отправить данные',
        })
    }, []);

    useEffect(() => {
        if (!country || !city) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [country, city]);

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeCity = (e) => {
        setCity(e.target.value);
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    }

    return (
        <div className={"form"}>
            <h3>Введите данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Страна'}
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Город'}
                value={city}
                onChange={onChangeCity}
            />
            <select className={'select'} value={subject} onChange={onChangeSubject}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;