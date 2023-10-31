import { category } from "../../../interfaces/Category.interface"
import CategoryCard from "../../components/CategoryCard"
import { RiTeamFill, RiPlanetFill, RiRocketFill } from "react-icons/ri";


const categories: category[] = [
    {
        title: 'Personas',
        icon: RiTeamFill,
        route: '/people'
    },
    {
        title: 'Planetas',
        icon: RiPlanetFill,
        route: '/planets'
    },
    {
        title: 'Naves',
        icon: RiRocketFill,
        route: '/ships'
    }
]
const CategoriesHome = () => {
  return (
    
    <div className="container mx-auto flex flex-wrap justify-center gap-6 p-8">
        {
            categories.map((item: category, index: number) => {

                return (
                    <CategoryCard key={index} parametros={item} />
                )
            })
        }
        
    </div>
  )
}

export default CategoriesHome