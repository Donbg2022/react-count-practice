import { useState }from 'react'
import './Count.css'

function Count(){

  const [value, setValue] = useState(0)

  const handleClick = () => {
    setValue(value + 1)
  }
  const handleClickDown = () => {
    setValue(value - 1)
  }
  const handleClickReset = () => {
    setValue(value - value)
  }

  return (
    <div className="buttons">
      <button onClick={handleClick}>UP</button>
      <button onClick={handleClickDown}>DOWN</button>
      <button onClick={handleClickReset}>RESET</button>
      <div>{value}</div>
    </div>
  )
}

export default Count