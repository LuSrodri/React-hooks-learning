

import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'

export default (props) => {

    let [count, setCount] = useState(0)


    let addDelta = useCallback(function add(delta) {
        setCount(curr => curr + delta)
    }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Return a memorized function."
            />

            <div className="center">
                <span className='text'>{count}</span>
                <UseCallbackButtons addDelta={addDelta}></UseCallbackButtons>
            </div>
        </div>
    )
}