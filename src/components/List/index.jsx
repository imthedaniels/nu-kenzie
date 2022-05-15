import skeleton from '../../img/skeleton-card.png'
import Card from '../../components/Card'
import { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import './style.css'

const Form = ({
  filteredList,
  setFilteredList,
  listTransactions,
  setListTransactions,
}) => {
  const [btnColored, setBtnColored] = useState('all')

  const handleTransaction = (item) => {
    const filterListTrans = listTransactions.filter((transaction) => {
      return transaction !== item
    })

    setListTransactions(filterListTrans)

    const filterListFiltered = filteredList.filter((transaction) => {
      return transaction !== item
    })

    setFilteredList(filterListFiltered)
  }

  return (
    <div id='containerLista'>
      <div id='firstInfo'>
        <span className='resumoFinanceiro'>Resumo Financeiro</span>

        <div id='filtros'>
          <button
            className={btnColored === 'all' ? 'btnSelected' : ''}
            onClick={() => {
              setFilteredList([...listTransactions])
              setBtnColored('all')
            }}
          >
            Todos
          </button>
          <button
            className={btnColored === 'incomes' ? 'btnSelected' : ''}
            onClick={() => {
              setFilteredList(
                listTransactions.filter(({ type }) => type === 'entrada')
              )
              setBtnColored('incomes')
            }}
          >
            Entradas
          </button>
          <button
            className={btnColored === 'expenses' ? 'btnSelected' : ''}
            onClick={() => {
              setFilteredList(
                listTransactions.filter(({ type }) => type === 'saída')
              )
              setBtnColored('expenses')
            }}
          >
            Despesas
          </button>
        </div>
      </div>
      {listTransactions.length === 0 || filteredList.length === 0 ? (
        <div className='boxSkeleton'>
          <h1>Você ainda não possui nenhum lançamento</h1>
          <img className='skeleton' src={skeleton} alt='Skeleton Card' />
          <img className='skeleton' src={skeleton} alt='Skeleton Card' />
          <img className='skeleton' src={skeleton} alt='Skeleton Card' />
        </div>
      ) : (
        <ul>
          {filteredList
            .map((trans, index) => (
              <Card
                trans={trans}
                key={index}
                handleTransaction={handleTransaction}
              />
            ))
            .reverse()}
        </ul>
      )}
    </div>
  )
}

export default Form
