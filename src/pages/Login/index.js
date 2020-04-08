import React from 'react';
import waveImg from '../../assets/wave.png';
import teamWorkImg from '../../assets/team_work.svg'
import avatarImg from '../../assets/login.jpeg';
import { FiUser, FiLock } from 'react-icons/fi'
import './styles.css'; 

export default function Login() {
    return(
        <React.Fragment>
            <img  className="wave" src={waveImg} alt="Cachorro de fundo"/>
            <div className="container">
                <div className="img">
                    <img src={teamWorkImg} alt="Cachorro do login"/>
                </div>
                <div className="login-content">
                    <form action="">
                        <img className="avatar" src={avatarImg} alt="Schnauzer perfil"/>
                        <h2>
                            Bem vindo!
                        </h2>
                        <div className="input-div">
                            <div className="i">
                                <i className="fas fa-user"></i>
                                <FiUser/>
                            </div>
                            <div>
                                <h5>
                                    Usuário
                                </h5>
                                <input className="input" type="text"/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <i className="fas fa-lock"></i>
                                <FiLock/>
                            </div>
                            <div>
                                <h5>
                                    Senha
                                </h5>
                                <input className="" type="password"/>
                            </div>
                        </div>
                        <a href="#">
                            Esqueci a senha
                        </a>
                        <input className="btn" type="submit" value="Entrar"/>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};