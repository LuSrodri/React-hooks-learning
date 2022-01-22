

import './App.css'
import React from 'react'
import { BrowserRouter as Router } from  'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

export default props => {

    return (
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
    )
}
