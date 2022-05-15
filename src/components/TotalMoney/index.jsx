import './style.css'
import UINumber from '../UINumber'

const TotalMoney = ({ listTransactions, filteredList }) => {
  const totalValue = listTransactions.reduce(
    (acc, trans) => Number(acc) + Number(trans.value),
    0
  )

  return (
    <div id='totalMoney'>
      <div id='totalMoney__text'>
        <p>Valor Total:</p>
        <span> O valor se refere ao saldo. </span>
      </div>

      <UINumber format='0.0,'>
        {filteredList
          ? filteredList.reduce(
              (total, { value, type }) =>
                type === 'entrada' ? total + +value : total - +value,
              0
            )
          : listTransactions.reduce(
              (total, { value, type }) =>
                type === 'entrada' ? total + +value : total - +value,
              0
            )}
      </UINumber>

      <span className='infoMSG'> O valor se refere ao saldo. </span>
    </div>
  )
}

export default TotalMoney
