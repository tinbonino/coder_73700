
import './App.css'
import DogApi from './components/DogApi';
import Paises from './components/Paises';
import FakeStore from './components/FakeStore';
import PostApi from './components/PostApi';
function App() {


  return (
    <>
      <DogApi/>
      <Paises/>
      {/* <FakeStore/> */}
      <PostApi/>
    </>
  )
}

export default App
