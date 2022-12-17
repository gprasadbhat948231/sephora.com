import Navbar from './Components/Navbar';
import Navbarbtm from './Components/Navbarbtm';
import CartPage from './Components/CartPage/CartPage';
import EyeCare from './Pages/EyeCare';
import Home from './Pages/Home';
function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <EyeCare/>
      <CartPage/>
      {/* <Home/> */}
    </div>
  )
}
export default App;