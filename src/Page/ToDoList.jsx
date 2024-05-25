import React, { Fragment, useState } from 'react'
import ViewPortWrapper from '../Components/Wrapper/ViewPortWrapper'
import ToDoListBtn from '../Components/ToDoListBtn'

export default function ToDoList() {

  // 輸入代辦事項內容
  const [inputValue, setInputValue] = useState('');

  
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
              value={inputValue}
              addItem={inputValue}
            />
          </div>
        </div>
      </ViewPortWrapper>
    </Fragment>
  )
}
