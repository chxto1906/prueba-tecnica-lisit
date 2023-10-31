import { Link } from 'react-router-dom'; 
import { category } from '../../interfaces/Category.interface';
const CategoryCard = (props: {parametros: category}) => {
    return (
        <Link to={props.parametros.route}>
          <div className="w-64 h-80 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center">
        <div className="text-4xl text-secondary mb-2">
          <props.parametros.icon />
        </div>
        <div className="p-4">
          <h2 className="text-3xl font-semibold text-center mb-2">
            {props.parametros.title}
          </h2>
        </div>
      </div>
        </Link>
      );
}

export default CategoryCard