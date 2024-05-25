import React, { Fragment, useReducer, useState, useCallback, useEffect } from 'react'
import '../Css/ToDoListBtn.css'
import { useTranslation } from 'react-i18next';
import { use } from 'i18next';

const ToDoListBtn = ({ onChange, value }) => {
    const { t } = useTranslation('toDoList');
    // 控制選擇狀態選擇
    const [status, setStatus] = useState(0);
    // 代辦事項 { title: '代辦事項', checked: true }   
    const [toDoList, setToDoList] = useState([]);
    // 新增代辦事項
    const [inputValue, setInputValue] = useState('');

    const addToDoList = useCallback((item) => {
        setToDoList([...toDoList, item]);
        // 新增代辦事項時清空輸入框
        setInputValue('');
    }, [toDoList]);

    const removeToDoList = useCallback((index) => {
        setToDoList(toDoList.filter((_, i) => i !== index));
    }, [toDoList]);

    // 編輯代辦事項(未完成, 已完成)
    const editToDoList = useCallback((index) => {
        const newList = [...toDoList];
        newList[index].checked = !newList[index].checked;
        setToDoList(newList);
    }, [toDoList]);

    // 監聽輸入框值變化
    useEffect(() => {
        setInputValue(value);
    }, [value]);

    useEffect(() => {
        // 監聽enter時自動新增代辦事項
        const handleKeyDown = (event) => {
            if (event.keyCode === 13) {
                addToDoList({ title: inputValue, checked: false });
            }
        }
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    },[addToDoList, inputValue]);

    return (
        <Fragment>
            <div style={{ margin: '0 auto', width: '80%' }}>
                <h1>{t('TO_DO_LIST')}</h1>
                {/* 新增代辦事項 */}
                <div className="card input">
                    <input
                        type="text"
                        placeholder={t('PLEASE_ENTER_TODO_ITEM')}
                        onChange={onChange}
                        value={inputValue}
                        maxLength={20}
                    />
                    <button
                        className="btn_add"
                        style={{ color: 'white' }}
                        onClick={() => {
                            addToDoList({ title: value, checked: false });
                        }}
                    >+</button >
                </div>
                {/* 切換代辦事項 */}
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
                            {/* 代辦事項清單 */}
                            {/* 全部 */}
                            {status === 0 && toDoList.map((item, index) => {
                                return (
                                    <ToDoListText
                                        key={index}
                                        text={item.title}
                                        removeToDoList={removeToDoList}
                                        index={index}
                                        checked={item.checked}
                                        onChange={() => editToDoList(index)}
                                    />
                                )
                            })}
                            {/* 未完成 */}
                            {status === 1 && toDoList.filter(item => !item.checked).map((item, index) => {
                                return (
                                    <ToDoListText
                                        key={index}
                                        text={item.title}
                                        removeToDoList={removeToDoList}
                                        index={index}
                                        checked={item.checked}
                                        onChange={() => editToDoList(index)}
                                    />
                                )
                            })}
                            {/* 已完成 */}
                            {status === 2 && toDoList.filter(item => item.checked).map((item, index) => {
                                return (
                                    <ToDoListText
                                        key={index}
                                        text={item.title}
                                        removeToDoList={removeToDoList}
                                        index={index}
                                        checked={item.checked}
                                        onChange={() => editToDoList(index)}
                                    />
                                )
                            })}
                        </ul>
                        <div className="list_footer">
                            <p>{toDoList.filter(item => !item.checked).length + ' 個待完成項目'}</p>
                            <a href="#">清除已完成項目</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

const ToDoListText = ({ text, removeToDoList, index, checked, onChange }) => {

    return (
        <li>
            <label className="checkbox">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                />
                <span>{text}</span>
            </label>
            <a href="#" className="delete" onClick={() => removeToDoList(index)} />
        </li>
    );
}

export default ToDoListBtn
