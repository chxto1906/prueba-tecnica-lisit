import { useEffect, useState } from "react";
import { getResourceList } from "../../../services/api";
import { extractIdFromURL, getPageNumberFromURL } from "../../../utils/utils";
import { Link } from "react-router-dom";
import ShipCard from "../../components/ShipCard";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";
import { Ship } from "../../../interfaces/Ships.interface";
import { RiRocketFill } from "react-icons/ri";


const Ships = () => {

    const [ ships, setShip] = useState<Ship[]>([]);
    const [ currentPage, setCurrentPage] = useState(1);
    const [ searchTerm, setSearchTerm ] = useState('')
    const [loading, setLoading ] = useState(true);
    const [nextPage, setNextPage] = useState<number | null>(null);

  useEffect(() => {
    fetchShip(currentPage, searchTerm);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const fetchShip = (page: number, searchTerm: string = '') => {
    setLoading(true)
    getResourceList('starships',page, searchTerm)
      .then((response) => {
        setShip(response?.data?.results);
        setNextPage(getPageNumberFromURL(response?.data.next));
        setLoading(false)
      })
      .catch((error) => {
        console.error(error);
        setLoading(false)
      });
  };


  const handleSearch = async (searchT: string) => {
    setSearchTerm(searchT)
    if (currentPage !== 1)
        setCurrentPage(1)
    else {
        fetchShip(currentPage,searchT)
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (nextPage !== null) {
      setCurrentPage(nextPage);
    }
  };

  return (
    <div className="bg-gray-100 py-8 min-h-screen">
      <div className="container mx-auto min-h-screen">
        <h2 className="text-4xl font-semibold mb-4 p-2 flex"><RiRocketFill />Naves</h2>
        <Search onSearch={handleSearch} />
        {loading ? 
            <Loading />
        : 
            <>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {ships.map((ship, index) => (
                    <Link key={index} to={`/ships/${extractIdFromURL(ship.url)}`}>
                        <ShipCard ship={ship} />
                    </Link>
                ))}
            </div>
            </>    
        }
        <Pagination
              onPrevious={handlePreviousPage}
              onNext={handleNextPage}
              hasPrevious={currentPage > 1}
              hasNext={nextPage !== null}
            />
      </div>
    </div>
  )
}

export default Ships