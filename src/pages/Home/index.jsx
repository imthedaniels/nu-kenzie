// IMAGES AND STYLE
import logoLight from '../../img/logo-light.svg'
import previewApp from '../../img/preview-app.svg'
import './style.css'

const Home = ({ setIsLoggedIn }) => {
  const text = 'Centralize o \n controle das suas \n finanças'

  return (
    <div id='fundo'>
      <div id='mainContainer'>
        <div id='mainContainer__Info' className='display-linebreak'>
          <img
            id='mainContainer__logo-light'
            src={logoLight}
            alt='Light Logo Version'
          />
          <h1 id='title'>{text}</h1>
          <h2 id='description'>de forma rápida e segura</h2>
          <button id='btnHome' onClick={() => setIsLoggedIn(true)}>
            Iniciar
          </button>
        </div>
        <div id='containerImg'>
          <img className='previewAppImg' src={previewApp} alt='Preview App' />
        </div>
      </div>
    </div>
  )
}

export default Home
