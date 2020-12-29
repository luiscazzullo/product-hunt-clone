import React from "react";
import Layout from "../components/Layout/Layout";
import useProducts from "../hooks/useProducts";
import Products from "../components/Layout/Products";

const Home = () => {
  const { products } = useProducts("created");
  return (
    <div>
      <Layout>
        <div className="listado-productos">
          <div className="contenedor">
            <ul className="bg-white">
              {products.map((product) => (
                <Products key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
