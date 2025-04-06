import React from 'react';
import './Form.css';
import dot from "../../assets/whiteDot.svg";
import {TextField} from "@mui/material";
import { useForm, ValidationError } from '@formspree/react';

const Form = ({isMobile}) => {
    const [termsAccepted, setTermsAccepted] = React.useState(false);
    const [state, handleSubmit] = useForm("xgvapvwl");

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

                <form className='form-container-body-input' onSubmit={handleSubmit}>
                    <TextField label="Имя" name={"name"} variant="standard" required={true}/>
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                    <TextField label="Телефон" name={"phone"} variant="standard" required={true}/>
                    <ValidationError
                        prefix="Phone"
                        field="phone"
                        errors={state.errors}
                    />
                    <TextField label="Email" name={"email"} variant="standard" required={true}/>
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <label>
                        <input className='custom-checkbox'
                               onChange={() => setTermsAccepted(!termsAccepted)}
                               required={true}
                               type={"checkbox"}/>Согласен с условиями обработки <a
                        style={{color: "white"}} href={'#'}>персональных
                        данных</a>
                    </label>

                    <button className={`sent-form-button `} disabled={state.submitting} type="submit">
                        Оставить заявку
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;