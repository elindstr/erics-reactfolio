import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <article>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </article>
  )
}

export default App
