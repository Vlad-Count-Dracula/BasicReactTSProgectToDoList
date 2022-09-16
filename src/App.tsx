import { useContext } from "react";
import { CreateProduct } from "./components/CreateProduct";
import { ErrorComponent } from "./components/Error";
import { Modal } from "./components/Modal";
import Product from "./components/Products";
import { ModalContext } from "./context/ModalContext";
import { ApiRequestProducts } from "./hooks/api";
import { IProduct } from "./models";


function App() {

  const {products, error, loader, setProduct} = ApiRequestProducts();
  const {modal, open, close} = useContext(ModalContext);

  const updateData = (newData: IProduct) => {
    close();
    setProduct(newData);
  }


  return (
    <>
    <div className="container max-w-7xl mx-auto ">
      {error && <ErrorComponent error={error} />}
      {loader && <p>Loadin...</p>}
      {products.map(product => <Product products={product} key={product.id} />)}
    </div>

    {modal && <Modal title="Create new modal" onClose={() => close()}>
      <CreateProduct onChange={updateData} />
    </Modal>}
    <button onClick={() => open()} className="fixed right-10 bottom-8 bg-orange-800 rounded-xl px-2 py-2 text-white">+</button>
    </>
  )
};



export default App;

