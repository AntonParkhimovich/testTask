import {
    Link
  } from "react-router-dom";
export const Header =()=>{
    return(
        <header className={'header'}>
            <Link className={'header-link'} to={`/${city}`}>Главная страница</Link>
            <Link className={'header-link'} to={`/${city}/detail`}>Побочная страница</Link>
        </header>
    )
}