import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

export default (props) => {

    let [count, setCount] = useState(0);
    let [name, setName] = useState('');

    function setTextResult(){
        let textResult = document.getElementById('textResult');
        textResult.innerHTML = textResult.innerHTML + ' ' + name;
        setName('');
    }

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="State in functional components"
            />
            <SectionTitle title="#01"></SectionTitle>
            <div className="center">
                <span className="text">
                    {count}
                </span>
                <div>
                    <button className="btn" onClick={
                        () => setCount(count + 1)
                    }>+1</button>
                    <button className="btn" onClick={
                        () => setCount(count - 1)
                    }>-1</button>
                </div>

            </div>

            <SectionTitle title="#02"></SectionTitle>
            <input type="text" className="input" value={name} onKeyUp={ (e) => {
                    if (e.key === 'Enter' || e.key === 13) {
                        setTextResult()
                    }
            }} onChange={e => setName(e.target.value)}/>
            <span className="textResult" id='textResult'></span>
        </div>
    )
}

