import React, { Fragment, useState, useCallback, useEffect } from 'react'
import ViewPortWrapper from '../Components/Wrapper/ViewPortWrapper'
import ToDoListBtn from '../Components/ToDoListBtn'
import { v4 as uuidv4 } from 'uuid';
export default function ToDoList() {

  // 輸入代辦事項內容
  const [inputValue, setInputValue] = useState('');

  // 代辦事項 { title: '代辦事項', checked: true }   
  const [toDoList, setToDoList] = useState([]);

  const validateInput = (value) => {
    if (value.trim() === '') {
      return false;
    }
    return true;
  }

  // 新增代辦事項
  const addToDoList = useCallback((item) => {
    // 驗證輸入值
    if (validateInput(item.title)) {
      const data = [...toDoList, item];
      // 將資料存到LocalStorage
      localStorage.setItem("toDoList", JSON.stringify(data));
      // 新增代辦事項
      setToDoList(data);
      // 清空輸入值
      setInputValue('');
    }
  }, [toDoList]);

  // 刪除代辦事項
  const removeToDoList = useCallback((index) => {
    const data = toDoList.filter((_, i) => i !== index);
    // 將資料存到LocalStorage
    localStorage.setItem("toDoList", JSON.stringify(data));
    // 刪除代辦事項
    setToDoList(data);
  }, [toDoList]);

  // 編輯代辦事項(未完成, 已完成)
  const editToDoList = useCallback((uuid) => {
    const newList = toDoList.map((item) => {
      if (item.uuid === uuid) {
        item.checked = !item.checked;
      }
      return item;
    });
    // 將資料存到LocalStorage
    localStorage.setItem("toDoList", JSON.stringify(newList));
    // 編輯代辦事項
    setToDoList(newList);
  }, [toDoList]);

  // 使用localStorage資料
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("toDoList"));
    // 存在localStorage資料
    if (data) {
      setToDoList(data);
    }
  }, []);

  // 監聽enter時自動新增代辦事項
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 13) {// Enter鍵觸發
        addToDoList({
          title: inputValue,
          checked: false,
          uuid: uuidv4(),
          createdAt: new Date().toLocaleString(),
          date: new Date().toString()
        });
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    // 移除監聽事件
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [addToDoList, inputValue]);


  return (
    <Fragment>
      <ViewPortWrapper>
        <div className="background-image">
          <div className="container-fluid">
            {/* 代辦事項  */}
            <ToDoListBtn
              onChange={(e) => {
                setInputValue(e.target.value)
              }}
              onClick={() => {
                addToDoList({
                  title: inputValue,
                  checked: false,
                  uuid: uuidv4(),
                  createdAt: new Date().toTimeString(),
                  date: new Date().toString()
                });
              }}
              value={inputValue}
              toDoList={toDoList}
              removeToDoList={removeToDoList}
              editToDoList={editToDoList}
            />
          </div>
        </div>
      </ViewPortWrapper>
    </Fragment>
  )
}
