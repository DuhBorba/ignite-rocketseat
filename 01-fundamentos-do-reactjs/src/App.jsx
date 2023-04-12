import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'


function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Eduardo Borba" content="Teste post descrição" />
          <Post author="Eduardo Borba" content="Teste post descrição" />
        </main>
      </div>
    </div>
  )
}

export default App
