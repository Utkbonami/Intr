import { useEffect, useState } from "react";
import axios from "axios";

const productsUrl = "https://course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const resp1 = await axios(productsUrl);
      console.log(resp1.data);
      setData(resp1.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        <ul>
          {
            data.map((d) => (
              <li>{d.name}</li>
            ))
          }
        </ul>
    </div>
  );
};
export default GlobalInstance;
