import React, {useState , useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Features/userSlices';
import './Login.scss';

const LoginPage = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [data,setData] = useState(null);
    const [emailError,setEmailError] = useState('');
    const [passwordError,setPasswordError] = useState('');
    // const [isValid,setValid] = useState(false);
    const [isValidUser,setValidUser] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(email && password){
            data.map((item) => {
                if(item.username === email && item.password === password) {
                    
                    dispatch(login({
                        email : email,
                        password : password,
                        loggedIn : true
                    }))
                }
                else{
                    setValidUser("Not Found..!")
                }
            })
        }
        else{
        }
    }

    const setFieldValue = (e,field) => {
        let fieldValue = e;
        switch(field) {
            case 'email':
                setEmail(fieldValue);
                !fieldValue.includes('@') ? setEmailError('Invalid Email'): setEmailError('');
            break;
            case 'password':
                setPassword(fieldValue);
            default:
              return;
          }
          console.log("email & passwrd=====>",email,password)
        //   email.length>0 && password.length>0?setValid(true):setValid(false);
    }


    const getData=()=>{
        fetch('data.json')
        .then((res) => res.json())
        .then((data) => {
        //   console.log('DAata:', data);
          setData(data)
        })
      }
      useEffect(()=>{
        getData()
      },[])



    return (
        <section className="login__wrapper">
            {/* {
                console.log("isValid-----",isValid)
            } */}
            <form className="login__form" onSubmit = { (e) => handleSubmit(e) }>
                <h6 style={{"marginBottom" : "0px"}}>Welcome User,</h6>
                <hr/>
                <h1>Login</h1>

                <div className = "email__field">
                    <input type="email" placeholder="Email" value = {email} 
                        onChange = {(e) => setFieldValue(e.target.value , "email")}
                    />

                </div>
                <div className="field__error">
                    {/* {
                        emailError?<span>{emailError}</span>:null
                    } */}
                    {
                        emailError?
                            <div className = "error">
                                <span>{emailError}</span>
                            </div>
                            :
                            null
                    }
                </div>

                <div className = "pwd__field">
                    <input type="password" placeholder="Password" value = {password} 
                        onChange = {(e) => setFieldValue(e.target.value , "password")}
                    />
                </div>

                <div className="field__error">
                    {
                        passwordError?<span>{passwordError}</span>:null
                    }
                </div>

                <div className="field__error">
                    
                         {
                            isValidUser?
                                <div className="warning">
                                        <span>{isValidUser}</span>
                                </div>
                             :null
                         }
                    
                </div>

                <div className="btn__field">
                    <button type="submit" 
                    className = {
                                    email.length>0 && password.length>0 && emailError.length<1?
                                    "btn btn-primary"
                                    :
                                    "btn btn-primary disabled"
                                }
                    >Submit</button>
                </div>
            </form>
        </section>
    )
} 

export default LoginPage;
