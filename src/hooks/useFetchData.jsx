
import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState(null); // For storing data
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling

  useEffect(() => {
    const fetchData =  async () => {
      try {
       
        const json  = await fetch(url).then(res=>{
          return res?.json()
        });
        console.log("after await",json)
        setData(json);
        setLoading(false);
      } catch (err) {
        setError("error fecht",err);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
