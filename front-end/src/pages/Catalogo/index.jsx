/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Filtros from "../../components/Filtros";
import Input from "../../components/Input";
import Posts from "../../components/Post";
import products from "../../data/products";

function Catalogo() {
  const [product, setProduct] = useState([]);
  const [valueTipo, setValueTipo] = useState("Todos");
  const [valueSexo, setValueSexo] = useState("");
  const handleChangeTipo = (event) => {
    const newValueTipo = event.target.value;
    setValueTipo(newValueTipo);
    if (newValueTipo === "Todos") {
      setValueSexo("");
    }
  };

  const handleChangeSexo = (event) => {
    setValueSexo(event.target.value);
  };

  const getAll = async () => {
    try {
      const res = await Promise.resolve(products);
      let filteredRes = res;

      if (valueTipo !== "Todos") {
        filteredRes = filteredRes.filter(
          (product) => product.tipo === valueTipo
        );
      }

      if (valueSexo && valueTipo !== "Todos") {
        filteredRes = filteredRes.filter(
          (product) => product.sexo === valueSexo
        );
      }
      setProduct(filteredRes.sort((a, b) => a.name.localeCompare(b.name)));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAll();
  }, [valueTipo, valueSexo]);
  return (
    <div>
      <Filtros
        input={
          <>
            <Input
              text="Todos"
              name="tipo"
              checked={valueTipo === "Todos"}
              onChange={handleChangeTipo}
            />
            <Input
              text="Camisas"
              name="tipo"
              checked={valueTipo === "Camisas"}
              onChange={handleChangeTipo}
            />
            <Input
              text="Shorts"
              name="tipo"
              checked={valueTipo === "Shorts"}
              onChange={handleChangeTipo}
            />
            <Input
              text="Infantil"
              name="tipo"
              checked={valueTipo === "Infantil"}
              onChange={handleChangeTipo}
            />
            <Input
              text="Feminina"
              name="sexo"
              checked={valueSexo === "Feminina"}
              onChange={handleChangeSexo}
            />
            <Input
              text="Masculino"
              name="sexo"
              checked={valueSexo === "Masculino"}
              onChange={handleChangeSexo}
            />
          </>
        }
      />
      <div className="mt-[120px] pb-6 w-full bg-transparent  grid sm:grid-cols-1   md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-5 px-6  overflow-hidden">
        {product.map((product) => (
          <Posts key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
