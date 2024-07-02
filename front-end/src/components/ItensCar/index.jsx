/* eslint-disable react/prop-types */
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProduct,
} from "../../redux/cart/slice";
function ItensCar({ product }) {
  const dispatch = useDispatch();
  const handleRemoveClick = () => {
    dispatch(removeProduct(product.id));
  };
  const handleIncreaseClick = () => {
    dispatch(increaseProductQuantity(product.id));
  };
  const handleDecreaseClick = () => {
    dispatch(decreaseProductQuantity(product));
  };
  const price = product.price * product.quantity;
  return (
    <div className="shadow-2xl shadow-gray-400 flex items-center  w-full h-56  rounded-lg ">
      <img
        src={product.imageUrl}
        alt="imagem n carregada"
        className="h-full w-3/6 rounded-l-lg"
      />
      <div className="flex flex-col w-3/6  justify-around h-full items-center">
        <h1 className="text-center text-xl font-bold ">{product.name}</h1>
        <div className="flex justify-around items-center gap-2">
          <FaMinus className="cursor-pointer" onClick={handleDecreaseClick} />
          <p className="font-bold">{product.quantity}</p>
          <FaPlus className="cursor-pointer" onClick={handleIncreaseClick} />
        </div>
        <div className="flex gap-12 font-semibold ">
          <p>Valor:</p>
          <p>R$ {price}</p>
        </div>
      </div>

      <button
        onClick={handleRemoveClick}
        className="h-5 flex  justify-center w-16 mx-auto rounded-r-md text-red-900 text-xl"
      >
        {" "}
        <FaTrash />{" "}
      </button>
    </div>
  );
}

export default ItensCar;
