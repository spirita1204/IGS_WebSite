import React, { Fragment } from 'react'

const ViewPortWrapper = ({ children }) => {
    return (
        <Fragment>
            <div id="viewport">
                <div id="content">
                    {children}
                </div>
            </div>
        </Fragment>
    )
}

export default ViewPortWrapper
