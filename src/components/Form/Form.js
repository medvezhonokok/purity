import React, {useEffect} from 'react';
import './Form.css';
import dot from "../../assets/whiteDot.svg";
import {TextField} from "@mui/material";
import {useForm, ValidationError} from '@formspree/react';
import useContentWidth from "../../hooks/useContentWidth";
import Confetti from 'react-confetti'

const Form = ({isMobile}) => {
    const [termsAccepted, setTermsAccepted] = React.useState(false);
    const [state, handleSubmit] = useForm("xgvapvwl");
    const width = useContentWidth();

    return (
        <>
            <div id='form' className={'form-container ' + (isMobile && 'form-container-mobile')} style={{width}}>
                <div className='us-container-header' style={!isMobile ? {color: "white", width: "30%"} : {
                    color: "white",
                    width: "50%",
                    marginTop: '2rem'
                }}>
                    <img className={"dot"} src={dot} alt={'us-dot'}/>Форма&nbsp;заявки
                </div>
                <div className='form-container-body'>
                    <div className='form-header' style={isMobile && {fontSize: "32px"}}>
                        Расскажите нам о&nbsp;<span
                        className={"ideas " + (isMobile ? "mobile" : "")}>вашей&nbsp;идее</span>&nbsp;&mdash;&nbsp;<br/>
                        <span style={{
                            color: "#1611E7"
                        }}>мы поможем&nbsp;</span>её реализовать!
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
                        <label className="pers">
                            <input className='custom-checkbox'
                                   onChange={() => setTermsAccepted(!termsAccepted)}
                                   required={true}
                                   type={"checkbox"}/>Согласен с условиями обработки&nbsp;<a
                            style={{color: "white"}} href={'policy'}>персональных
                            данных</a>
                        </label>

                        <button className={`sent-form-button `} disabled={state.submitting} type="submit">
                            Оставить заявку
                        </button>
                    </form>
                </div>
            </div>
            {state.succeeded && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                    numberOfPieces={500}
                />
            )}
        </>
    );
};

export default Form;