import "@fortawesome/fontawesome-free/css/all.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listarticles from './components/articles/Listarticles';
import Editarticle from './components/articles/Editarticle';
import Insertarticle from './components/articles/Insertarticle';
import Viewarticle from './components/articles/Viewarticle';
import Listcategorie from './components/categories/Listcategorie';
import Editcategorie from './components/categories/Editcategorie';
import Insertcategorie from './components/categories/Insertcategorie';
import Viewcategorie from './components/categories/Viewcategorie';
import Listscategorie from './components/scategories/Listscategorie';
import Editscategorie from './components/scategories/Editscategorie';
import Insertscategorie from './components/scategories/Insertscategorie';
import Viewscategorie from './components/scategories/Viewscategorie';
import Menu from './components/Menu';
import Listarticlecard from "./components/articles/Listarticlecard";
function App() {


  return (
    <>
      <Router>
        <Menu/>
        <Routes>
          <Route path="/articles" element={<Listarticles />} />
          <Route path='/article/edit/:id' element={<Editarticle/>}/>
          <Route path='/articles/add' element={<Insertarticle/>}/>
          <Route path='/article/view/:id' element={<Viewarticle/>}/>
          <Route path='/categories' element={<Listcategorie/>}/>
          <Route path='/categories/edit/:id' element={<Editcategorie/>}/>
          <Route path='/categories/add' element={<Insertcategorie/>}/>
          <Route path='/categories/view/:id' element={<Viewcategorie/>}/>
          <Route path='/scategories' element={<Listscategorie/>}/>
          <Route path='/scategories/edit/:id' element={<Editscategorie/>}/>
          <Route path='/scategories/add' element={<Insertscategorie/>}/>
          <Route path='/scategories/view/:id' element={<Viewscategorie/>}/>

          <Route path='/' element={<Listarticlecard/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
