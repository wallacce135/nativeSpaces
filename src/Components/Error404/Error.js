import React from "react";
import './Error.scss';
import error_logo from '../../assets/404.svg';

function Error(){
    return(
        <div className="Error">
            <figure>
                <img src={error_logo} alt=""/>
                <figcaption>Нам жаль, но данная страница не найдена</figcaption>
                <button>Перейти на главную</button>
            </figure>
        </div>
    )
}

export default Error