import React, { useState } from "react";

const Landing = () => {
  // const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const creds = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
      };
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(creds),
      });
      // setData((await res.json()).products);
      // console.log(data);
      // console.log(data.products);
      // console.log(res.json());
      const { encodedToken } = await res.json();
      localStorage.setItem("encodedToken", encodedToken);
      console.log(localStorage.getItem("encodedToken"));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h1 onClick={getData}>Landing</h1>;
      <ul>
        {/* {data.map((e) => (
          <li key={e._id}>
            <p>{e.title}</p>
            <img src={e.img} alt="pic" height={"500px"} width={"500px"} />
            <p>{e.price}</p>
            <p>{e.delivery}</p>
            <p>{e.rating}</p>
            <p>{e.color}</p>
            <p>{e.flowerType}</p>
            <p>{e.arrangements}</p>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default Landing;
