import {CartState} from "../context/Context";


const Home = () => {
    const {
        state: { products },
    } = CartState();
    console.log(products);
     
    return <div className="home">

        {/* <div className="productContainer">
            {
                products.map((prod) => {
                  return  <SingleProduct prod = {prod} key={prod.id} />;
                })
            }
        </div> */}

    </div>
    }
    export default Home;
