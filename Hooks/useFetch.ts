import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const res = await (await fetch(url)).json();
        if (res) setData(res);
      } catch (err) {
        console.log(err);
      }

      console.log("fetch");
    };

    data === null && fetchData(url);
  }, [data, setData, url]);

  return data;
};

export default useFetch;
