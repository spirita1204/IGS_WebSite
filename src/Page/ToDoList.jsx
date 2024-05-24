import React, { Fragment } from 'react'
import ViewPortWrapper from '../Components/Wrapper/ViewPortWrapper'

export default function ToDoList() {
  return (
    <Fragment>
      <ViewPortWrapper>
        <div className="container-fluid">
          <h1>Simple </h1>
          <p>
            Make sure to keep all page content within the
            <code>#content</code>.
          </p>
        </div>
      </ViewPortWrapper>
    </Fragment>
  )
}
