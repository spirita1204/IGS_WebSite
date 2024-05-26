import React, { Fragment, useMemo, useState } from 'react'
import '../Css/ToDoListBtn.css'
import { useTranslation } from 'react-i18next';
import { HiArrowDown, HiArrowUp } from "react-icons/hi";

const ToDoListBtn = ({ onChange, value, onClick, toDoList, removeToDoList, editToDoList }) => {
    const { t } = useTranslation('toDoList');
    // 控制選擇狀態選擇
    const [status, setStatus] = useState(0);
    // 切換排序
    const [dir, setDir] = useState(1);
    // 排序
    const handleSort = () => {
        setDir(dir * -1);
    }
    // 待完成項目數量
    const uncompletedItemsCount = useMemo(() => {
        const uncompletedItems = toDoList.filter(item => !item.checked).length;
        if (uncompletedItems === 0 || uncompletedItems === 1) {
            return uncompletedItems + t('ITEM');
        } else {
            return uncompletedItems + t('ITEMS');
        }
    }, [t, toDoList]);

    return (
        <Fragment>
            <div style={{ margin: '0 auto', width: '80%' }}>
                <h1 className="custom-heading">{t('TO_DO_LIST')}</h1>
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
                        <lii
                            className={(status === 0) ? "active" : ''}
                            onClick={() => setStatus(0)}
                        >{t('ALL')}</lii>
                        <lii
                            className={(status === 1) ? "active" : ''}
                            onClick={() => setStatus(1)}
                        >{t('UNCOMPLETED')}</lii>
                        <lii
                            className={(status === 2) ? "active" : ''}
                            onClick={() => setStatus(2)}
                        >{t('COMPLETED')}</lii>
                    </ul>
                    <div className="cart_content">
                        <ul className="list">
                            {/* 代辦事項清單 */}
                            {/* 全部 0*/}
                            {/* 未完成 1*/}
                            {/* 已完成 2*/}
                            <ToDoListTextGrp
                                toDoList={toDoList}
                                type={status === 0 ? "all" : status === 1 ? "uncompleted" : "completed"}
                                removeToDoList={removeToDoList}
                                editToDoList={editToDoList}
                                sort={dir}
                            />
                        </ul>
                        <div className="list_footer">
                            {/* 個待完成項目 */}
                            <p style={{ margin: '0 5px' }}>{uncompletedItemsCount}</p>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p
                                    style={{ margin: '0 5px', fontWeight: 'bold' }}
                                    onClick={handleSort}
                                >{t('SORT_BY')}</p>
                                {/* 控制箭頭方向 作用排序(新增時間) */}
                                {dir === -1 && <HiArrowDown />}
                                {dir === 1 && <HiArrowUp />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

const ToDoListTextGrp = ({ toDoList, type, removeToDoList, editToDoList, sort }) => {
    let toDoListFiltered = [];

    if (type === 'all') {
        toDoListFiltered = toDoList;
    } else if (type === 'uncompleted') {
        toDoListFiltered = toDoList.filter(item => !item.checked);
    } else if (type === 'completed') {
        toDoListFiltered = toDoList.filter(item => item.checked);
    }

    if (sort === 1) {// 新到舊排序
        toDoListFiltered = toDoListFiltered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {// 舊到新排序
        toDoListFiltered = toDoListFiltered.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    return (
        <Fragment>
            {toDoListFiltered.map((item, index) => {
                return (
                    <ToDoListText
                        key={index}
                        text={item.title}
                        createdAt={item.createdAt}
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

const ToDoListText = ({ text, removeToDoList, index, checked, onChange, createdAt }) => {
    return (
        <li>
            <label className="checkbox">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{text}</span>
                    <span>{createdAt}</span>
                </div>
            </label>
            <a href="#" className="delete" onClick={() => removeToDoList(index)} />
        </li>
    );
}

export default ToDoListBtn
