import React, { useEffect, useState } from "react";
import axios from "axios";
const Api = () => {

  const [data, setData] = useState([]);
const [loading,setLoading] = useState(true);

useEffect(() => {
    const fetchData = async () => {
      const url = "https://jsonplaceholder.typicode.com/photos";
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.log('Error:', error);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchData();
  }, []);


//   useEffect(() => {
//     const fetchData = async () => {
//       const url = "https://jsonplaceholder.typicode.com/photos";
//       try {
//         const response = await fetch(url);
//         const jsonData = await response.json();
//         setData(jsonData);
//         setLoading(false); // Set loading to false when data is fetched
//       } catch (error) {
//         console.log('Error:', error);
//         setLoading(false); // Set loading to false on error
//       }
//     };

//     fetchData();
//   }, []);

  return (
    <>
      <div>Api</div>

      {
        
            data.map(item => (
                <div key={item.id}>
                  <img id = "img" src={item.url} alt={item.title} />
                  <p>{item.title}</p>
                  <p>{item.id}</p>
                </div>
              ))
        }
        
        
        
        

        
      
    

    </>
  );
};

export default Api;
