import React from 'react';
import './Form.css';
import dot from "../../assets/whiteDot.svg";
import {TextField} from "@mui/material";

const Form = ({isMobile}) => {
    const [termsAccepted, setTermsAccepted] = React.useState(false);

    return (
        <div id='form' className={'form-container ' + (isMobile && 'form-container-mobile')}>
            <div className='us-container-header' style={!isMobile ? {color: "white", width: "30%"} : {color: "white", width: "50%", marginTop: '2rem'}}>
                <img src={dot} alt={'us-dot'}/> Форма заявки
            </div>
            <div className='form-container-body'>
                <div className='form-header' style={isMobile && {fontSize: "32px"}}>
                    Расскажите нам о <span style={{
                    background: "white",
                    color: "black",
                    borderRadius: "1rem",
                    padding: "3px"
                }}>вашей идее</span> &mdash;
                    <br/><span style={{
                    color: "#1611E7"
                }}>мы поможем</span> её реализовать!
                </div>

                <form className='form-container-body-input'>
                    <TextField label="Имя" variant="standard" required={true}/>
                    <TextField label="Телефон" variant="standard" required={true}/>
                    <TextField label="Email" variant="standard" required={true}/>
                    <label>
                        <input className='custom-checkbox'
                               onChange={() => setTermsAccepted(!termsAccepted)}
                               required={true}
                               type={"checkbox"}/>Согласен с условиями обработки <a
                        style={{color: "white"}} href={'#'}>персональных
                        данных</a>
                    </label>

                    <button className={`sent-form-button `} type="submit">
                        Оставить заявку
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;