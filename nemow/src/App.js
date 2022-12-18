import Navbar from './Components/Navbar';
import Navbarbtm from './Components/Navbarbtm';
import CartPage, { FirebaseConfigForOTP } from './Components/CartPage/CartPage';
import EyeCare from './Pages/EyeCare';
import Home from './Pages/Home';
function App() {
  return (
    <div>

      <EyeCare/>
      <CartPage/>
      {/* <FirebaseConfigForOTP/> */}
    
    </div>
  )
}
export default App;