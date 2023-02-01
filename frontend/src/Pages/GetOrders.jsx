import React, { useEffect, useState } from "react";

const GetOrders = () => {
const [myOrders,setMyOrders] = useState([]);

  const getOrder = async() => {

    return await fetch("https://voosh-backend-ynzp.onrender.com/get-order", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("voosh_token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setMyOrders(res.orders)
      });
  };

  useEffect(() => {
    getOrder();
  }, []);
console.log(myOrders,"myorders")
  return(
    <div className="getOrders">
             {
                myOrders?myOrders.map((item)=>(
                    <div  className="order_box">
                    <div className="img_box"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfAWtwXp_6ZmmUBbwagqoSsIeh_x-V1jy0apToS9k&s" alt="" /></div>
                    <div>

                    <span>Phone : </span> {item.phone_number}
                    </div>
                    <div> <span>sub_total : </span> {item.sub_total}</div>
                    </div>
                    )):""
                
             }
  </div>
  );
};

export default GetOrders;
