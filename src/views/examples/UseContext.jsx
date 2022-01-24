

import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import DataContext from '../../data/dataContext'
import { AppContext } from '../../data/store'

const UseContext = (props) => {

    let context = useContext(DataContext)

    function setN(n) {
        context.setState({
            ...context.state,
            number: n
        })
    }

    const { number, text, setNumber } = useContext(AppContext)

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext Context API"
                subtitle="Accepts a Context object and return the current value of Context."
            />
            <SectionTitle title="#01"></SectionTitle>
            <div className="center">
                <span className='text'>{context.state.number} - {context.state.text}</span>
            </div>

            <div className='center'>
                <span>
                    <button className='btn' onClick={() => setN(context.state.number - 1)}>-1</button>
                    <button className='btn' onClick={() => setN(context.state.number + 1)}>+1</button>
                </span>

            </div>

            <SectionTitle title="#02"></SectionTitle>
            <div className='center'>
                <span className="text">{number} - {text}</span>
                <span>
                    <button className='btn' onClick={() => setNumber(number - 1)}>-1</button>
                    <button className='btn' onClick={() => setNumber(number + 1)}>+1</button>
                </span>

            </div>

        </div>
    )
}

export default UseContext
