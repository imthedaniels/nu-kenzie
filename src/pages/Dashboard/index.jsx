// COMPONENTS
import Header from '../../components/Header'
import Form from '../../components/Form'
import List from '../../components/List'
import TotalMoney from '../../components/TotalMoney'

//OTHERS
import { useState } from 'react'
import './style.css'

const Dashboard = ({ setIsLoggedIn }) => {
  const [filteredList, setFilteredList] = useState(false)
  const [listTransactions, setListTransactions] = useState([
    { description: 'Salário Dez', type: 'entrada', value: 3000 },
    { description: 'Açougue', type: 'saída', value: 300 },
    { description: 'Horas Extras', type: 'entrada', value: 1200 },
    { description: 'Freelance', type: 'entrada', value: 830 },
    { description: 'Consertos', type: 'saída', value: 120 },
    { description: 'Diarista', type: 'saída', value: 600 },
    { description: 'Doações', type: 'saída', value: 1000 },
    { description: 'Salário Nov', type: 'entrada', value: 3000 },
    { description: 'Estacionamento', type: 'saída', value: 270 },
    { description: 'Horas Extras', type: 'entrada', value: 900 },
  ])

  return (
    <div>
      <Header setIsLoggedIn={setIsLoggedIn} />
      <div id='dashboard'>
        <div id='descAndTotal'>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            filteredList={filteredList}
            setFilteredList={setFilteredList}
          />
          <TotalMoney
            listTransactions={listTransactions}
            filteredList={filteredList}
          />
        </div>
        <List
          filteredList={filteredList ? filteredList : listTransactions}
          setFilteredList={setFilteredList}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </div>
    </div>
  )
}

export default Dashboard
