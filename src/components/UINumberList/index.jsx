import numeral from 'numeral'

const UINumberList = ({ format, value }) => {
  return <span>R$ {numeral(value).format(format)}</span>
}

export default UINumberList
