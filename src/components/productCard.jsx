import"./productCard.css"
export default function  ProductCard(props) {
    //Function should be start Capital letter
    //{} used for JSX code when run under the html
    return (
        <div className="max-w-sm rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-gray-800 p-4 hover:shadow-xl transition duration-300">
            <img 
                src={props.image} 
                alt={props.name} 
                className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {props.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
                Price: <span className="font-bold">{props.price}</span>
            </p>
            <button className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Add to Cart
            </button>
        </div>
    );
}