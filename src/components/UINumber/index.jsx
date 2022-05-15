import numeral from 'numeral'

numeral.register('locale', 'pt-br', {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'mil',
    million: 'milhões',
    billion: 'b',
    trillion: 't',
  },
  ordinal: function (number) {
    return 'º'
  },
  currency: {
    symbol: 'R$',
  },
})

numeral.locale('pt-br')

const UINumber = ({ format, children }) => {
  return <span>R$ {numeral(children).format(format)}</span>
}

export default UINumber
