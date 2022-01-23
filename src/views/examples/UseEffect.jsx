
import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(n) {
    if (n < 0) return -1
    if (n === 0) return 1


    let result = 1;
    let count = 1;

    while (count <= n) {
        result *= count;
        count++;
    }

    return result
}

function ifIsEvenNumber(n) {
    if (n % 2 === 0) return true
    else return false
}

export default (props) => {

    let [number, setNumber] = useState(1);
    let [factorial, setFactorial] = useState(1)

    let [number1, setNumber1] = useState(1);
    let [isEvenNumber, setIsEvenNumber] = useState(false)

    useEffect(() => {
        setFactorial(calcFactorial(number))
    }, [number])

    useEffect(() => {
        if (factorial > 1000000)
            document.title = "WOOOOOW!!!!!!"
    }, [factorial])

    useEffect(() => {
        setIsEvenNumber(ifIsEvenNumber(number1))
    }, [number1])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Allows execute collateral effects in functional components."
            />

            <SectionTitle title="#01"></SectionTitle>
            <div className="center">
                <span className="text">Factorial:</span>
                <span className="text red">{factorial === -1 ? 'Error' : factorial}</span>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="#02 Challenge"></SectionTitle>
            <div className='center'>

            </div>
            <div className="center">
                <div>
                    <span className="text red">{number1} </span>
                    <span className="text ">{isEvenNumber === true ? 'is a Even Number' : 'is a Odd Number'}</span>
                </div>
                <input type="number" className="input" value={number1} onChange={e => setNumber1(e.target.value)} />
            </div>
        </div>
    )
}
