import Carousel from "./carousel";
import Footer from "./footer";
import Header from "./header";
import SearchBar from "./searchBar";

const Page = () => {
 return(
  <div className="px-6">
   <Header />
   <SearchBar />
   <Carousel />
   <Footer />
  </div>
 )
}

export default Page;

