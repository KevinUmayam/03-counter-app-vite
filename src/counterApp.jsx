import PropTypes from 'prop-types'
import {useState} from 'react'

const CounterApp = () => {

    const [counter, setCounter] = useState(0)
    const handleAdd = () => {
        // setCounter(counter + 1)
        setCounter((c) => c + 1)
    }
    return (
    <>
        <h1>counterApp</h1>
        <h2> {counter} </h2>
        <button onClick={ handleAdd }>
            +1
        </button>
    </>
    )
}
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

export default CounterApp