import React, { Fragment, useReducer, useState, useCallback } from 'react'
import '../Css/ToDoListBtn.css'
import { useTranslation } from 'react-i18next';

const ToDoListBtn = ({ onChange, value, addItem }) => {
    const { t } = useTranslation('toDoList');
    // 控制選擇狀態選擇
    const [status, setStatus] = useState(0);

    // 
    const [toDoList, setToDoList] = useState([]);

    const addToDoList = useCallback((item) => {
        setToDoList([...toDoList, item]);
    }, [toDoList]);

    return (
        <Fragment>
            <div style={{ margin: '0 auto', width: '80%' }}>
                <h1>{t('TO_DO_LIST')}</h1>
                <div className="card input">
                    <input
                        type="text"
                        placeholder={t('PLEASE_ENTER_TODO_ITEM')}
                        onChange={onChange}
                        value={value}
                        maxLength={20}
                    />
                    <button
                        className="btn_add"
                        style={{ color: 'white' }}
                        onClick={() => addToDoList(addItem)}
                    >+</button >
                </div>
                <div className="card card_list">
                    <ul className="tab">
                        <li
                            className={(status === 0) ? "active" : ''}
                            onClick={() => setStatus(0)}
                        >{t('ALL')}</li>
                        <li
                            className={(status === 1) ? "active" : ''}
                            onClick={() => setStatus(1)}
                        >{t('UNCOMPLETED')}</li>
                        <li
                            className={(status === 2) ? "active" : ''}
                            onClick={() => setStatus(2)}
                        >{t('COMPLETED')}</li>
                    </ul>
                    <div className="cart_content">
                        <ul className="list">
                            <li>
                                <label className="checkbox" for="">
                                    <input type="checkbox" />
                                    <span>把冰箱發霉的檸檬拿去丟</span>
                                </label>
                                <a href="#" className="delete"></a>
                            </li>
                            <li>
                                <label className="checkbox" for="">
                                    <input type="checkbox" />
                                    <span>把冰箱發霉的檸檬拿去丟</span>
                                </label>
                                <a href="#" className="delete"></a>
                            </li>
                            <li>
                                <label className="checkbox" for="">
                                    <input type="checkbox" />
                                    <span>把冰箱發霉的檸檬拿去丟</span>
                                </label>
                                <a href="#" className="delete"></a>
                            </li>
                            <li>
                                <label className="checkbox" for="">
                                    <input type="checkbox" />
                                    <span>把冰箱發霉的檸檬拿去丟</span>
                                </label>
                                <a href="#" className="delete"></a>
                            </li>
                        </ul>
                        <div className="list_footer">
                            <p>5 個待完成項目</p>
                            <a href="#">清除已完成項目</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default ToDoListBtn
