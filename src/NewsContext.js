import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
   const [data, setData] = useState();
   const apiKey = "993dcd11665e457e89991e3b4828894a" ;

   useEffect( () => {
      axios
          .get(`https://newsapi.org/v2/top-headlines/?country=gb&apiKey=${apiKey}`)
          .then( (response) => setData(response.data) )
          .catch( (error) => console.log(error) );
   }, []);

   return (
       <>
       <NewsContext.Provider value = {{ data }} >
          {props.children}
       </NewsContext.Provider>
       </>
   )
};

