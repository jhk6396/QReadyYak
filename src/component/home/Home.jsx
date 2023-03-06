import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Footer from '../nav/BotNavbar';
import Navbar from '../nav/TopNavbar'; 
import sea from 'C:/Users/82104/Desktop/ToyProject/exam/src/main/reactfront/src/images/sea.jpg'
const Home = () => {
    const [isLogin, setIsLogin] = useState(false); //로그인 관리

    useEffect(()=> {
        if(sessionStorage.getItem("name") === null) {
            console.log("isLogin ?? :: ", isLogin);
        }else {
            setIsLogin(true);
            console.log("isLogin ?? :: ", isLogin);
        }
    });

    return (
        <div>
        <Navbar />
        <div className='h-screen items-center justify-center bg-slate-400 py-60 px-60'>
            {/* <img src={sea}/> */}
            <div className='bg-white overflow-hidden rounded-3xl shadow-xl group '>
                <div className='bg-orange-300 p-6'>
                    <span className='text-white text-2xl'>Home</span>
                    <br/>
                    {isLogin ? (
                        <div className='text-white text-2sl'>
                            <Link to ={"/MyPage"}>마이 페이지</Link>
                            <br />
                            <span>{sessionStorage.getItem("name")} 회원님 환영합니다.</span>
                            <br/>
                            <a onClick={() => {sessionStorage.clear();}}>로그아웃</a>
                        </div>
                    ) : (
                        <Link className='text-white text-2sl' to={"/loginPage"}>로그인 페이지</Link>
                    )}
                </div>
                <div className='rounded-3xl p-6 bg-white relative top-3'>
                    <div className='flex relative t-17 items-end justify-between'>
                        <div className='relative flex flex-col items-center jusify-center mb-5'>
                            <span className='text-3xs text-gray-500'>
                                <Link to={"/test"}>테스트 페이지</Link>
                            </span>
                            <span className='text-3xs text-gray-500'>
                                <Link to={"/user"}>유저정보 페이지</Link>
                            </span>
                            <span className='text-3xs text-gray-500'>
                                <Link to={"/shop"}>쇼핑 리스트</Link>
                            </span>
                            <span className= 'text-3xs text-gray-500'>
                                <Link to={"/board"}>게시판</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Home;