import Carousel from "./carousel";
import Header from "./header";
import SearchBar from "./searchBar";

const Page = () => {
 return(
  <div
   className="px-6"
  >
   <Header />
   <SearchBar />
   <Carousel />
  </div>
 )
}

export default Page;

