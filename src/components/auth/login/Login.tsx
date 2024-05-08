import React, {useState} from "react";
import {authAPI} from "../../../redux/api/authAPI";
import {invalidPasswordPattern} from "../patterns";
import {emailPattern} from "../patterns"
import {phonePattern} from "../patterns"
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch";
import {userSlice} from "../../../redux/slices/userSlice";
import {useNavigate} from "react-router-dom";
import classes from "../Auth.module.css"

const Login: React.FunctionComponent = () => {

    const [isError, setIsError] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const {init} = userSlice.actions;

    const navigate = useNavigate();

    const [phoneEmail, setPhoneEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [goNext, setGoNext] = useState<boolean>(false);

    const [loginByEmail] = authAPI.useLoginByEmailMutation();
    const [loginByPhone] = authAPI.useLoginByPhoneMutation();

    const handleSubmit = async (e: React.FormEvent) =>  {
        e.preventDefault();
        if(invalidPasswordPattern.test(password)) {
            setIsError(true);
            return;
        }
        if(emailPattern.test(phoneEmail)) {
            const withEmailToken = await loginByEmail({email: phoneEmail, password: password}).unwrap();
            console.log(withEmailToken);
            dispatch(init(withEmailToken));
            sessionStorage.setItem("auth_token", `Bearer ${withEmailToken.token}`);
            navigate("/");
        }
        else {
            const withPhoneToken = await loginByPhone({phone: phoneEmail, password: password}).unwrap();
            console.log(withPhoneToken);
            dispatch(init(withPhoneToken));
            sessionStorage.setItem("auth_token", `Bearer ${withPhoneToken.token}`);
            navigate("/");
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            {!goNext
                ?
                <LoginEmail phoneEmail={phoneEmail} setPhoneEmail={setPhoneEmail} goNext={goNext} setGoNext={setGoNext}/>
                :
                <>
                    {isError && <div className={classes.error}>Введіть коректний пароль</div>}
                    <LoginPassword password={password} setPassword={setPassword}/>
                </>
            }
        </form>
    );
}

const LoginEmail: React.FunctionComponent<{phoneEmail: string,
    setPhoneEmail: React.Dispatch<React.SetStateAction<string>>,
    goNext: boolean,
    setGoNext: React.Dispatch<React.SetStateAction<boolean>>}> = ({phoneEmail, setPhoneEmail, goNext, setGoNext}) => {

    const [isError, setIsError] = useState<boolean>(false);

    return (
        <div className={classes.formBlock}>
            <div className={classes.cardWrapper}>
                {isError && <div className={classes.error}>Введіть коректний емейл або номер телефону</div>}
                <h2 className={classes.formHeader}>Ввійти</h2>
                <label className={classes.formLabel} htmlFor="loginInput">Емейл або номер телефону</label>
                <input className={classes.formInput} placeholder="Емейл або номер телефону" id="loginInput" type="text" value={phoneEmail} onChange={(e) => setPhoneEmail(e.target.value)}/>
                <button className={classes.formSubmit} onClick={(e)=>{
                    if(emailPattern.test(phoneEmail) || phonePattern.test(phoneEmail)) {
                        setIsError(false);
                        setGoNext(true);
                    } else {
                        setIsError(true);
                    }
                }}>Продовжити</button>
            </div>
        </div>
    );
}

const LoginPassword: React.FunctionComponent<{password: string, setPassword: React.Dispatch<React.SetStateAction<string>>}> = ({password, setPassword}) => {

    return (
        <div className={classes.formBlock}>
            <h2>Ввійти</h2>
            <label htmlFor="passwordInput">Пароль</label>
            <input placeholder="Пароль" id="passwordInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Продовжити</button>
        </div>
    );
}

export default Login;