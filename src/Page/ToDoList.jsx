import React, { Fragment } from 'react'
import ViewPortWrapper from '../Components/Wrapper/ViewPortWrapper'
import ToDoListBtn from '../Components/ToDoListBtn'

export default function ToDoList() {
  return (
    <Fragment>
      <ViewPortWrapper>
        <div className="background-image">
          <div className="container-fluid">
            {/* 代辦事項  */}
            <ToDoListBtn />
          </div>
        </div>
      </ViewPortWrapper>
    </Fragment>
  )
}
