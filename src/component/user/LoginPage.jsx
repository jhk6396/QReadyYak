import axios from 'axios';
import React, { useState } from 'react';



const LoginPage = () => {
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const onClickLogin = () => {

        if(inputId === ""){
            alert("Email을 입력해주세요.");
            return;
        }else if(inputPw === ""){
            alert("Password를 입력해주세요.");
            return;
        }
    
        axios.post("http://localhost:8080/member/login",
        {
            email: inputId,
            passwd: inputPw,
        })
        .then((res)=>{
            if(res.data.email === undefined){
                alert("입력하신 id가 일치하지 않습니다.");
                return;
            }else if(res.data.email !== null){
                sessionStorage.setItem("user_id", inputId)
                sessionStorage.setItem("name", res.data.name);
            }
            document.location.href = "/"; 
        })
        .catch();
    };
    
    return (
        <div className='h-screen flex items-center justify-center bg-gray-500'>
            <div className='bg-white w-full max-w-lg py-10 rounded-lg text-center'>
                <div className='flex mt-5 flex-col justify-start w-3/4 mx-auto'>
                    <p className='w-56 h-16 text-5xl font-bold text-stone-900'>Login</p>
                </div>
                <div className='flex mt-5 flex-col justify-center p-2 w-3/4 mx-auto'>
                    <form className='flex flex-col mt-5 px-5'>
                        <input type="email" name="input_id" value={inputId} placeholder='Email' className='bg-gray-50 peer shadow-inner focus:outline-none border-2 focus:border-yellow-500 mb-3 py-3 px-5 rounded-lg' onChange={(e) => {setInputId(e.target.value)}}/>
                        <input type="password" name="input_pw" value={inputPw} placeholder='Password' className='bg-gray-50 peer shadow-inner focus:outline-none border-2 focus:border-yellow-500 mb-3 py-3 px-5 rounded-lg' onChange={(e) => {setInputPw(e.target.value)}}/>
                        <span className='hidden peer-invalid:block peer-invalid:text-red-500'>Email과 Password 입력을 확인해주세요.</span>
                    
                    <button
                        type="button"
                        className='flex justify-center mt-5 bg-orange-300 text-white p-3 px-2 text-center mb-3 py-3 rounded-lg
                        hover:bg-amber-500
                        hover:text-black
                        focus:ring-2 ring-offset-2 ring-yellow-500 transition'
                        onClick={onClickLogin}
                    >Login</button>
                    </form>
                    <p className='w-40 h-7 text-sl text-gray-400 w-2/4'>Forgot a password?</p>
                    <div className='flex flex-col mt-5 px-5'>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;