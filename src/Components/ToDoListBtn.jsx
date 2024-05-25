import React, { Fragment, useState } from 'react'
import '../Css/ToDoListBtn.css'
import { useTranslation } from 'react-i18next';

const ToDoListBtn = ({ onChange, value, onClick, toDoList, removeToDoList, editToDoList }) => {
    const { t } = useTranslation('toDoList');
    // 控制選擇狀態選擇
    const [status, setStatus] = useState(0);

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
                        value={value}
                        maxLength={20}
                    />
                    <button
                        className="btn_add"
                        style={{ color: 'white' }}
                        onClick={onClick}
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
                            {status === 0 &&
                                <ToDoListTextGrp
                                    toDoList={toDoList}
                                    type="all"
                                    removeToDoList={removeToDoList}
                                    editToDoList={editToDoList}
                                />
                            }
                            {/* 未完成 */}
                            {status === 1 &&
                                <ToDoListTextGrp
                                    toDoList={toDoList}
                                    type="uncompleted"
                                    removeToDoList={removeToDoList}
                                    editToDoList={editToDoList}
                                />
                            }
                            {/* 已完成 */}
                            {status === 2 &&
                                <ToDoListTextGrp
                                    toDoList={toDoList}
                                    type="completed"
                                    removeToDoList={removeToDoList}
                                    editToDoList={editToDoList}
                                />
                            }
                        </ul>
                        <div className="list_footer">
                            {/* 個待完成項目 */}
                            <p>{toDoList.filter(item => !item.checked).length + t('ITEMS')}</p>
                            <a href="#">清除已完成項目</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

const ToDoListTextGrp = ({ toDoList, type, removeToDoList, editToDoList }) => {
    let toDoListFiltered = [];

    if (type === 'all') {
        toDoListFiltered = toDoList;
    } else if (type === 'uncompleted') {
        toDoListFiltered = toDoList.filter(item => !item.checked);
    } else if (type === 'completed') {
        toDoListFiltered = toDoList.filter(item => item.checked);
    }

    return (
        <Fragment>
            {toDoListFiltered.map((item, index) => {
                console.log(item, 'item');
                return (
                    <ToDoListText
                        key={index}
                        text={item.title}
                        removeToDoList={removeToDoList}
                        index={index}
                        checked={item.checked}
                        onChange={() => editToDoList(item.uuid)}
                    />
                )
            })}
        </Fragment>
    );
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
