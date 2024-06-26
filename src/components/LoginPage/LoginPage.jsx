import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './LoginPage.css';
import axiosInstance from './axiosInstance';

const LoginPage = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoggedInMessage, setIsLoggedInMessage] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loginStatus = sessionStorage.getItem('login');
        if (loginStatus) {
            setIsLoggedIn(true);
        }
    }, [setIsLoggedIn]);

    const handleLogin = async () => {
        try {
            const response = await axiosInstance.post('/members/login', {
                email: email,
                password: password
            });

            console.log('Full server response:', response.data);

            if (response.status === 200) {
                const { jwtToken, idx: memberId, profileImg, name } = response.data.data;
                const { accessToken, refreshToken } = jwtToken;

                console.log('Extracted data:', {
                    jwtToken,
                    memberId,
                    accessToken,
                    refreshToken,
                    profileImg,
                    name
                });

                sessionStorage.setItem('login', 'true');
                sessionStorage.setItem('accessToken', accessToken);
                sessionStorage.setItem('refreshToken', refreshToken);
                sessionStorage.setItem('memberId', memberId);
                sessionStorage.setItem('profileImg', profileImg);
                sessionStorage.setItem('name', name);
                sessionStorage.setItem('email', email);

                setIsLoggedIn(true);
                setIsLoggedInMessage(true);

                console.log('Email:', email);

                setTimeout(() => {
                    setIsLoggedInMessage(false);
                    navigate('/');
                }, 3000);
            } else {
                setError("로그인에 실패했습니다.");
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError("로그인 중 오류가 발생했습니다.");
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="login-page">
            <div className="logo-container_1">
                <img src={logo} alt="로고" className="logo" />
            </div>
            <div className="login-text">로그인</div>
            <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="이메일을 입력하세요."
                className="email-input"
            />
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="비밀번호를 입력하세요."
                className="password-input01"
            />
            {error && <p className="error-message white">{error}</p>}
            {isLoggedInMessage && <p className="success-message white">로그인 성공!</p>}
            <button onClick={handleLogin} className="login-button01">로그인</button>
            <p className="no-account">계정이 없으신가요? <span>&nbsp;</span><a href="/signup">회원가입</a></p>
        </div>
    );
}

export default LoginPage;
