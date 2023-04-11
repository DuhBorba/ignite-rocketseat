import { Post } from './Post';
import { Header } from './components/Header';

import './global.css'


function App() {

  return (
    <div>
      <Header />
      <Post author="Eduardo Borba" content="Teste post descrição" />
    </div>
  )
}

export default App
