

import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

let merge = (string1, string2) => {
    let count = 0;
    let stringResult = []
    let x = 0
    let y = 0
    while(count < ((string1.length+string2.length)*2)){
        if(count %2 === 0 && x<string1.length){
            stringResult.push(string1.charAt(x))  
            x++
        }
        else if(count %2 !== 0 && y<string2.length){
            stringResult.push(string2.charAt(y))  
            y++
        }
        count++
    }
    return stringResult
}

export default (props) => {

    let [value1, setValue1] = useState('Text');
    let [value2, setValue2] = useState('')

    let count = useRef(0);
    let input1 = useRef(null);
    let input2 = useRef(null);

    useEffect(() => {
        count.current++
        input2.current.focus()
    }, [value1])

    useEffect(() => {
        count.current++
        input1.current.focus()
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Return a changeable object with the .current property."
            />

            <SectionTitle title="#01"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Value: </span>
                    <span className="text">{merge(value1,value2)}</span>
                    <span className="text"> [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>

                <input ref={input1}
                 type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)} />
            </div>


            <SectionTitle title="#02"></SectionTitle>
            <div className="center">
                <input ref={input2}
                 type="text" className="input" value={value2} onChange={e => setValue2(e.target.value)}/>
            </div>

        </div>

    )
}

