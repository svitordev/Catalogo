/* eslint-disable react/prop-types */
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cart/slice";
function Posts({ product }) {
  const dispatch = useDispatch();
  const handleProductClick = () => {
    dispatch(addProduct(product));
  };
  return (
    <div className="shadow-xl bg-slate-100 shadow-gray-400 flex flex-col h-96 text-gray-800 rounded-lg">
      <img
        src={product.imageUrl}
        alt="imagem n carregada"
        className=" w-full rounded-t-lg h-4/5"
      />
      <div className="flex items-center justify-evenly h-10 font-bold">
        <h1>{product.name}</h1>
        <p>R$ {product.price}</p>
      </div>
      <button
        onClick={handleProductClick}
        className="bg-green-500 hover:bg-green-600 py-1 w-full mt-1 h-10 rounded-b-md text-white font-semibold flex  items-center justify-center gap-2"
      >
        <FaShoppingCart className="text-xl" /> Adicionar ao carrinho
      </button>
    </div>
  );
}

export default Posts;
