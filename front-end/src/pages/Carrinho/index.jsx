import { useSelector } from "react-redux";
import ItensCar from "../../components/ItensCar";
import { selectProductsTotalPrice } from "../../redux/cart/cart.selector";
function Carrinho() {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const productsTotalPrice = useSelector(selectProductsTotalPrice);
  return (
    <>
      <main className="pt-[4.5rem] pb-20 w-full  grid sm:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3  gap-5 pl-6 pr-6 ">
        {products.map((product) => (
          <ItensCar key={product.id} product={product} />
        ))}{" "}
      </main>
      <div className="bg_header h-16 w-full flex items-center justify-between px-10 fixed bottom-0">
        <p className="text-white text-3xl font-bold">R$ {productsTotalPrice}</p>
        <button className="text-white text-lg font-bold border-2 py-2 px-8 rounded-3xl hover:bg-white hover:text-red-900">
          Finalizar Pedido
        </button>
      </div>
    </>
  );
}

export default Carrinho;
