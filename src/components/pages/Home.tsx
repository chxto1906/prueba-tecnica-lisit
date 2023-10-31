import backgroundImage from '../../assets/background/home.webp';
import CategoriesHome from './categories/CategoriesHome';

const Home = () => {
    
    return (
        <>
        <div  className="w-screen  flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-gray-100 flex flex-col justify-center items-center p-8">
                <div className="text-3xl md:text-5xl font-bold text-gray-700 mb-4">
                Bienvenido a Nuestra Empresa
                </div>
                <div className="text-lg md:text-2xl text-gray-600 mb-8">
                Descubre lo que podemos hacer por ti.
                </div>
            </div>
            <div className="w-full md:w-1/2 bg-gray-100 flex flex-col justify-center items-center p-8">
                <img src={backgroundImage} alt="Imagen de la empresa" />
            </div>
        </div>
        <CategoriesHome />
        </>
    );
}

export default Home