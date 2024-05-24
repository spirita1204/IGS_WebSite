import React, { Fragment } from 'react'
import '../Css/Navbar.css'
import ViewPortWrapper from './Wrapper/ViewPortWrapper'
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t } = useTranslation('common');
    
    return (
        <Fragment>
            <ViewPortWrapper>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">{t('NAV_BAR.LANGUAGE')}</a></li>
                        </ul>
                    </div>
                </nav>
            </ViewPortWrapper>
        </Fragment>
    )
}

export default Navbar
