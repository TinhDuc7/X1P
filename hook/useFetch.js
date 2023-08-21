import {useState, useEffect} from 'react';
import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
      setIsLoading(true);
    try {
      const response = await axios.get('http://192.168.1.25:6060/api/products');
      setData(response.data);
      setIsLoading(false);
      // console.log('response ', response)
      // console.log('response.data ', response.data)
      
    } catch (error) {
      setError(error);
      // Error
      if (error.response) {
        console.log("error.response ", error.response);
    } else if (error.request) {
        console.log("error.request " +JSON.stringify( error.request));
        console.log("error.message " +JSON.stringify( error.message));
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error ', error.message);
    }
    console.log('error.config ',error.config);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {data, isLoading, error, refetch};
};

export default useFetch;


////////////////
// import { useEffect, useState } from 'react';

// const useFetch = (url) => {

//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetch(url)
//     .then((res) => res.json())
//       .then((data) => {
//       setError(data.error)
//       setData(data.joke)
//         setIsLoading(false)
//         console.log(err.res.data.message)
        
//     })
//   }, [url])
//   return {data, isLoading, error}
// };

// export default useFetch;

///////////////

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setIsLoading(true);
//     axios
//     .get(url)
//       .then((res) => {
//   console.log(res.data)
//         setData(res.data);
//         console.log(setData(res.data));
//         console.log(data);
//         console.log(res);
//       })
//       .catch((err) => {
//         setError(err);
//         console.log(err);
//         console.log(err.res.data.message)
//       })
//       .finally(() => {
//       setIsLoading(false)
//     })
//   }, [url])
//   return {data, isLoading, error}
// };

// export default useFetch;