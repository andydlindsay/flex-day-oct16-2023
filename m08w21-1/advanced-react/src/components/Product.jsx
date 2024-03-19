import {useParams, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

const Product = () => {
  const params = useParams(); // equivalent to req.params
  console.log(params);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/about'); // res.redirect()
    }, 2000);
  }, []);

  // useEffect(() => {
  //   // fetch(`/products/${params.productId}`)
  //   //   .then()
  //   props.state.products[params.productId];
  // }, [params.productId]);

  return (
    <div>
      <h2>Product Component #{params.productId}</h2>
    </div>
  );
};

export default Product;
