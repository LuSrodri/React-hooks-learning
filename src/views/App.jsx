

import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

import DataContext, {data} from '../data/dataContext'

export default props => {

    let [state, setState] = useState(data)

    return (
        <DataContext.Provider value={{state,setState}}>

            <div className="App">
                <Router>
                    <Menu />
                    <Content />
                </Router>
            </div>
        </DataContext.Provider>

    )
}
