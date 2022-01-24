

import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    number: 0,
    other: true
}

function reducer(state, action) {
    switch (action.type) {
        case "add2":
            return { ...state, number: state.number + 2 }
        case "addN":
            return { ...state, number: state.number + parseFloat(action.payload.number) }
        case "times7":
            return { ...state, number: state.number * 7 }
        case "divide25":
            return { ...state, number: state.number / 25 }
        case "round":
            return { ...state, number: Math.round(state.number) }
        default:
            return state
    }
}

const UseReducer = (props) => {
    const [state, dispath] = useReducer(reducer, initialState)
    const [n, setN] = useState(0)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Another way to have state in functional Components."
            />
            <div className="center">
                <span className="text">{state.number}</span>
                <span>
                    <button className="btn" onClick={() => dispath({ type: "add2" })}>+2</button>
                    <button className="btn" onClick={() => dispath({ type: "times7" })}>*7</button>
                    <button className="btn" onClick={() => dispath({ type: "divide25" })}>/25</button>
                    <button className="btn" onClick={() => dispath({ type: "round" })}>Round</button>
                    <div>
                        <input type="number" className="input" value={n} onChange={e => setN(e.target.value)} />
                        <button className="btn" onClick={() => dispath({ type: "addN", payload: { number: n } })}>add {n}</button>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default UseReducer
