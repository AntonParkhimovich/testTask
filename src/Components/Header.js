import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";


export const Header = () => {
    let { cityPath } = useParams();
    return (
        <header className={'header'}>
            <NavLink className={'header-link'} activeClassName={'active'} exact to={`/${cityPath}`}>HOME</NavLink>
            <NavLink className={'header-link'} activeClassName={'active'}  to={`/${cityPath}/detail`}>DETAIL</NavLink>
        </header>
    )
}