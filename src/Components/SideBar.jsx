import React, { Fragment } from 'react'
import '../Css/SideBar.css'
import { useTranslation } from 'react-i18next';

export default function SideBar() {
    const { t } = useTranslation('common');

    return (
        <Fragment>
            <div id="sidebar">
                <header>
                    {/* IGS Project */}
                    {t('IGS_TITLE')}
                </header>
                <ul className="nav">
                    <li>
                        <a href="/ToDoList">
                            <i className="zmdi zmdi-view-dashboard"></i> {t('SIDE_BAR.TO_DO_LIST')}
                        </a>
                    </li>
                    <li>
                        <a href="/Page2">
                            <i className="zmdi zmdi-link"></i> {t('SIDE_BAR.PAGE_2')}
                        </a>
                    </li>
                    <li>
                        <a href="/Page3">
                            <i className="zmdi zmdi-widgets"></i> {t('SIDE_BAR.PAGE_3')}
                        </a>
                    </li>
                    <li>
                        <a href="/Page4">
                            <i className="zmdi zmdi-calendar"></i> {t('SIDE_BAR.PAGE_4')}
                        </a>
                    </li>
                    <li>
                        <a href="/Page5">
                            <i className="zmdi zmdi-info-outline"></i> {t('SIDE_BAR.PAGE_5')}
                        </a>
                    </li>
                </ul>
            </div>
        </Fragment >
    )
}
