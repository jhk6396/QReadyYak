import React,{useEffect, useState} from "react";
import logo from 'C:/Users/82104/Desktop/ToyProject/exam/src/main/reactfront/src/images/QReadyYak.png'

export default function Navbar({ fixed }) {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);
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
    <>
      <div className="">
      <header isToggled={isToggled} userToggled={userToggled} className="fixed inset-x-0 top-0 z-50 left-0 bg-white font-bold text-gray-700 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between max-w-screen-xl">
          <div
            className="flex items-center"
          >
            <img alt="logo" src={logo} className="mr-3 ml-3 h-12" />
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a role="button" href="/#" className="mr-5 hover:text-gray-900">
              QReadyYak
            </a>
            <a role="button" href="/board" className="mr-5 hover:text-gray-900">
              게시판
            </a>
            <a role="button" href="/test" className="mr-5 hover:text-gray-900">
              테스트
            </a>
            <a role="button" href="/user" className="mr-5 hover:text-gray-900">
              유저정보
            </a>
            <a role="button" href="/shop" className="mr-5 hover:text-gray-900">
              쇼핑리스트
            </a>
            {isLogin ? (<div>
                          <a role="button" href="/MyPage" class="bg-orange-300 hover:bg-orange-400 text-gray-900 text-sm px-4 py-2 rounded-full">
                            마이 페이지 ({sessionStorage.getItem("name")} 회원님)
                          </a>
                          <a role="button" onClick={() => {sessionStorage.clear();}} class="mr-2 bg-orange-300 hover:bg-orange-400 text-gray-900 text-sm px-4 py-2 rounded-full">
                            로그아웃
                          </a>
                        </div>
                    ) : (
                      <div>
                        <a role="button" href="/loginPage" class="mr-2 bg-orange-300 hover:bg-orange-400 text-gray-900 text-sm px-4 py-2 rounded-full">
                          로그인
                        </a>
                        <a role="button" href="/loginPage" class="bg-orange-300 hover:bg-orange-400 text-gray-900 text-sm px-4 py-2 rounded-full">
                          시작하기
                        </a>
                      </div>
                    )}
          </nav>
        </div>
      </header>
      </div>
    </>
  );
}