import { useEffect, useState } from "react";
import { getResourceList } from "../../../services/api";
import { extractIdFromURL, getPageNumberFromURL } from "../../../utils/utils";
import { Link } from "react-router-dom";
import PlanetCard from "../../components/PlanetCard";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";
import { Planet } from "../../../interfaces/Planets.interface";


const Planets = () => {

    const [ planets, setPlanet] = useState<Planet[]>([]);
    const [ currentPage, setCurrentPage] = useState(1);
    const [ searchTerm, setSearchTerm ] = useState('')
    const [loading, setLoading ] = useState(true);
    const [nextPage, setNextPage] = useState<number | null>(null);

  useEffect(() => {
    fetchPlanet(currentPage, searchTerm);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const fetchPlanet = (page: number, searchTerm: string = '') => {
    setLoading(true)
    getResourceList('planets',page, searchTerm)
      .then((response) => {
        setPlanet(response?.data?.results);
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
        fetchPlanet(currentPage,searchT)
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
        <h2 className="text-3xl font-semibold mb-4 p-2">Planetas</h2>
        <Search onSearch={handleSearch} />
        {loading ? 
            <Loading />
        : 
            <>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {planets.map((planet, index) => (
                    <Link key={index} to={`/planets/${extractIdFromURL(planet.url)}`}>
                        <PlanetCard planet={planet} />
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

export default Planets