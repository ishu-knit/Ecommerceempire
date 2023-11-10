import React , {useContext} from "react";
import { usePDF } from "react-to-pdf";
import { Cartproducts } from "../App"; 
import { logincustomer } from "./Globalproducts";




export default function Orders() {
  const { userid ,setUserid} = useContext(logincustomer);

  const { products, setProducts } = useContext(Cartproducts);
    

  const arr = products.map((e, i) => e.price*e.qty)
  const total = arr.reduce((a, b) => a + b, 0);


  return (
    <div>
      {userid === "Login" ? (
        <h1>please login first</h1>
      ) : (
        <div >
            <Component  iid={userid} total={total}   />
        </div>
      )}
    </div>
  );
}

const Component = (props) => {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const {products} = useContext(Cartproducts)


  return (
    <div>
      <div ref={targetRef}>
        <div
          className="container border border-3 border-danger d-flex flex-column justify-content-center my-5"
          style={{ height: "80vh", width: "50%" }}>


          <h1 className="text-center my-5">Order Details</h1>
          <table className="bor">

            <tbody>
              <tr className="bor">
                <td>User_Email_id</td>
                <td>{props.iid}</td>
              </tr>

              {products.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>products {i}</td>
                    <td>{e.company}</td>
                    <td>₹{e.price}</td>
                  </tr>
                );
              })}
              <hr />
              <tr >
                <td>Total Amount</td>
                <td></td>
                <td>₹{props.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button onClick={() => toPDF()}>Download PDF</button>
    </div>
  );
};
