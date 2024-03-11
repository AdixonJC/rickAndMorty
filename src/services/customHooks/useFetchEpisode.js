import { useEffect, useState } from "react";

const useFetchepisode = (url) => {
  const [episode, setepisode] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setepisode(result);
      } catch (error) { setError(error) }
      finally {
        setLoading(false)
      }
    };
    fetchData()
  }, [url]);

  return {episode, error , loading}
};

export default useFetchepisode;
