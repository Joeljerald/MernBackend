import Navbar from "./components/Navbar";
import StudentProfile from "./components/StudentProfile";
import EmployeeCard from "./components/EmployeeCard";
import ProductCard from "./components/ProductCard.";
import MovieDetails from "./components/MovieDetails";
import CompanyInfo from "./components/CompanyInfo";

const App=()=>{
  return(<>
    <div>
    <Navbar/>
    <StudentProfile/>
    <EmployeeCard/>
    <ProductCard/>
    <MovieDetails/>
    <CompanyInfo/>
    </div>
    </>)
}
export default App;