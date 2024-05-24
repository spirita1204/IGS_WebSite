import React, { Fragment, useState } from 'react'
import '../Css/Navbar.css'
import ViewPortWrapper from './Wrapper/ViewPortWrapper'
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation('common');

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    /**
     * 更改多語系
     * @param {*} e 
     */
    const handleLanguageChange = (e) => {
        const selectedLang = e.target.value;
        setSelectedLanguage(selectedLang);
        i18n.changeLanguage(selectedLang);
    };

    return (
        <Fragment>
            <ViewPortWrapper>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <p className="select-wrapper">
                                    {t('NAV_BAR.LANGUAGE')}
                                    <select
                                        className="custom-select"
                                        value={selectedLanguage}
                                        onChange={handleLanguageChange}
                                    >
                                        {/* 中文(繁體) */}
                                        <option value="zh-TW">{t('NAV_BAR.TW')}</option>
                                        {/* 英文 */}
                                        <option value="zh-US">{t('NAV_BAR.US')}</option>
                                    </select>
                                </p>

                            </li>
                        </ul>
                    </div>
                </nav>
            </ViewPortWrapper>
        </Fragment>
    )
}

export default Navbar
