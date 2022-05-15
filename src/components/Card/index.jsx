import { FaTrash } from 'react-icons/fa'
import UINumberList from '../UINumberList'
import './style.css'

const Card = ({ trans, index, handleTransaction }) => {
  return (
    <li
      id='card'
      key={index}
      className={`card-${trans.type === 'entrada' ? 'income' : 'expense'}`}
    >
      <div>
        <h1>{trans.description}</h1>
        <UINumberList format='0,0.00' value={trans.value} />
        <button
          className='trashIcon'
          onClick={() => {
            handleTransaction(trans)
          }}
        >
          <FaTrash />
        </button>
      </div>
      <span className='typeSpan'>{`${trans.type[0].toUpperCase()}${trans.type.slice(
        1
      )}`}</span>
    </li>
  )
}

export default Card
