

import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'


export default React.memo( (props) => {
    console.log("render ....")
    return (
        <div>
            <button className="btn" onClick={() => props.addDelta(6)}>+6</button>
            <button className="btn" onClick={() => props.addDelta(12)}>+12</button>
            <button className="btn" onClick={() => props.addDelta(18)}>+18</button>
        </div>
    )
})