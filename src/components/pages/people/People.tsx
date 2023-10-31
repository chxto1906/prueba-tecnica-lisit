import { useEffect, useState } from "react";
import { getResourceList } from "../../../services/api";
import { Person } from "../../../interfaces/People.interface";
import { extractIdFromURL, getPageNumberFromURL } from "../../../utils/utils";
import { Link } from "react-router-dom";
import PersonCard from "../../components/PersonCard";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";


const People = () => {

    const [people, setPeople] = useState<Person[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ searchTerm, setSearchTerm ] = useState('')
    const [loading, setLoading ] = useState(true);
    const [nextPage, setNextPage] = useState<number | null>(null);

  useEffect(() => {
    fetchPeople(currentPage, searchTerm);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const fetchPeople = (page: number, searchTerm: string = '') => {
    setLoading(true)
    getResourceList('people',page, searchTerm)
      .then((response) => {
        setPeople(response?.data?.results);
        setNextPage(getPageNumberFromURL(response?.data.next));
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.error(error);
      });
  };


  const handleSearch = async (searchT: string) => {
    setSearchTerm(searchT)
    if (currentPage !== 1)
        setCurrentPage(1)
    else {
        fetchPeople(currentPage,searchT)
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
        <h2 className="text-3xl font-semibold mb-4 p-2">Personas</h2>
        <Search onSearch={handleSearch} />
        {loading ? 
            <Loading />
        : 
            <>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {people.map((person, index) => (
                    <Link key={index} to={`/people/${extractIdFromURL(person.url)}`}>
                        <PersonCard person={person} />
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

export default People