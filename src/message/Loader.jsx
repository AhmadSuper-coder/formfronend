import { useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";


function Loader() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#0d6fad");

  return (
    <>
        <div className="container">
            <div className="row mt-5">
                <div className="col-1 m-auto">
                    <div className="mt-5">
                        <ClockLoader color={color} loading={loading}  size={40} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Loader