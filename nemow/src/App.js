
import CartPage, { Wishlist } from './Components/CartPage/CartPage';
import LoadingIndicator from './Components/fountation/loading';
import Navbar from './Components/Navbar';
import EyeCare, { LoadingComponent } from './Pages/EyeCare';
import Footer from "./Pages/Footer";
import AllRoutes from './Pages/AllRoutes';
function App() {
  return (
    <div>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}
export default App;