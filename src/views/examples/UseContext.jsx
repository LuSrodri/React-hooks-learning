

import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/dataContext'

const UseContext = (props) => {

    let context = useContext(DataContext)

    function setNumber(n){
        context.setState({
            ...context.state,
            number: n
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext Context API"
                subtitle="Accepts a Context object and return the current value of Context."
            />
            <div className="center">
                <span className='text'>{context.state.number} - {context.state.text}</span>
            </div>

            <div className='center'>
                <button className='btn' onClick={ ()=> setNumber(context.state.number-1)}>-1</button>
                <button className='btn' onClick={ ()=> setNumber(context.state.number+1)}>+1</button>
            </div>
        </div>
    )
}

export default UseContext
