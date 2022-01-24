

import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import { useCounter } from '../../hooks/useCounter'

const UseRef = (props) => {

    const {count, inc , dec } = useCounter()

    return (
        <div className="UseCustom">
            <PageTitle
                title="Your Hook"
                subtitle="Creating the own hook!"
            />
            <SectionTitle title="#01"></SectionTitle>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className='btn' onClick={dec}>-1</button>
                    <button className='btn' onClick={inc}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseRef
