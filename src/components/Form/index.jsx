import './style.css'
import { useState } from 'react'

const Form = ({
  listTransactions,
  setListTransactions,
  filteredList,
  setFilteredList,
}) => {
  const [inputDescription, setInputDescription] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [inputType, setInputType] = useState('')

  const handleFormOnChange = () => {
    if (inputDescription !== '' && inputValue !== 0 && inputType !== '') {
      const object = {
        description: inputDescription,
        type: inputType,
        value: Number(inputValue),
      }

      const checkDescription = listTransactions.find(
        (trans) => trans.description === inputDescription
      )

      if (checkDescription === undefined) {
        setListTransactions([...listTransactions, object])
        setFilteredList([...filteredList, object])
        setInputDescription('')
        setInputValue('')
        setInputType('Selecione um tipo')
      } else {
        alert('Já existe uma transação com este nome.')
      }
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div id='description'>
        <label id='lblDesc'>Descrição</label>
        <input
          id='inputDescription'
          name='description'
          type='text'
          value={inputDescription}
          placeholder='Insira uma descrição'
          onChange={(event) => setInputDescription(event.target.value)}
        />
        <span id='spanExample'>Ex: Compra de roupas</span>
      </div>

      <div id='priceAndTypeLbl'>
        <label id='lblPrice' className='half'>
          Valor
        </label>
        <label id='lblType'>Tipo de Movimentação</label>
      </div>

      <div id='priceAndTypeData'>
        <div id='price'>
          <label>
            <span>R$</span>
            <input
              id='inputPrice'
              name='value'
              type='number'
              placeholder='1'
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
          </label>
        </div>

        <div id='type'>
          <select
            name='type'
            id='selectType'
            onChange={(event) => setInputType(event.target.value)}
            value={inputType}
            required
          >
            <option>Selecione um tipo</option>
            <option value='entrada'>Entrada</option>
            <option value='saída'>Saída</option>
          </select>
        </div>
      </div>

      <button type='submit' id='btnValue' onClick={handleFormOnChange}>
        Inserir Valor
      </button>
    </form>
  )
}

export default Form
