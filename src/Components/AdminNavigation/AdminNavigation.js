import React from "react";
import { Link } from 'react-router-dom';
import DATA from "../../constants/Data";
function AdminNavigation(props){
    const { loggedIn, handleSignOut } = props;

     return(
        <nav className="DesktopNavigation">
            <ul className="DesktopNavigation__list">
                <Link className="DesktopNavigation__link-main-menu" to={'admin'}>
                    <li className="DesktopNavigation__list-element">{DATA.NEWMESSAGE}</li>
                </Link>
                <Link className="DesktopNavigation__link-main-menu" to={'login'}>
                    <li className="DesktopNavigation__list-element">{DATA.OLDMESSAGE}</li>
                </Link>
                <Link className="DesktopNavigation__link-main-menu" to={'login'}>
                    <li className="DesktopNavigation__list-element">{DATA.EDITPRICE}</li>
                </Link>
                <Link className="DesktopNavigation__link-main-menu" to={'login'}>
                    <li className="DesktopNavigation__list-element">{DATA.MATERIALS}</li>
                </Link>
                {loggedIn
                    ?
                    <Link className="DesktopNavigation__link-main-menu" to={'/'} onClick={handleSignOut}>
                        <li className="DesktopNavigation__list-element">{DATA.EXIT}</li>
                    </Link>
                    :
                    <Link className="DesktopNavigation__link-main-menu" to={'login'}>
                        <li className="DesktopNavigation__list-element">{DATA.ADMIN}</li>
                    </Link>
                }
            </ul>
        </nav>
    )
}
export default AdminNavigation;