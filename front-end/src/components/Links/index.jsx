import { FaBookOpen, FaShoppingCart } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectProductsCount } from "../../redux/cart/cart.selector";

function Links() {
  const productsCount = useSelector(selectProductsCount);
  return (
    <ul className="flex items-center gap-6 links">
      <li>
        <Link className="Link text-gray-300 font-bold" to="/">
          <FaBookOpen /> Catalogo
        </Link>
      </li>
      <li>
        <Link className="Link text-gray-300 font-bold" to="/contato">
          <FaMessage /> Contato
        </Link>
      </li>
      <li>
        <Link
          className="Link text-2xl text-gray-300 font-bold ml-16 "
          to="/carrinho"
        >
          <FaShoppingCart />
          {productsCount !== 0 ? <span className="text-sm text-black bg-white rounded-full px-[6px]">{productsCount}</span> : ""}
        </Link>
      </li>
    </ul>
  );
}

export default Links;
