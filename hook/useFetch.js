
// // const {useState, useEffect} = require('react');
// // const axios = require('axios');
// // const dotenv = require('dotenv');

// import {useState, useEffect} from 'react';
// import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

// const useFetch = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//       setIsLoading(true);
      
//     try {
//       const response = await axios.get(process.env.PRODUCTS_API);
//       setData(response.data);
//       console.log('Show setData useFetch', setData(response.data));
//         setIsLoading(false);
        
//     } catch (error) {
//         setError(error);
        
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const refetch = () => {
//     setIsLoading(true);
//     fetchData();
//   };

//   return {data, isLoading, error, refetch};
// };

// // module.exports = useFetch;

// export default useFetch;


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
//       setIsLoading(false)
//     })
//   }, [url])
//   return {data, isLoading, error}
// };

// export default useFetch;

///////////////

import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    axios
    .get(url)
      .then((res) => {
        setData(res.data);
        console.log(setData(res.data));
        console.log(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
      setIsLoading(false)
    })
  }, [url])
  return {data, isLoading, error}
};

export default useFetch;