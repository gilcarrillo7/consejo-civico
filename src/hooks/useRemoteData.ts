import { useEffect, useState } from "react";
import axios from "axios";

export function useRemoteData<T>(slug: string, fallbackData: T) {
  const uri = `https://ccic.org.mx/wp/wp-json/wp/v2/posts?slug=${slug}&_=${Date.now()}`;
  const [data, setData] = useState<T>(fallbackData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(uri)
      .then((response) => {
        const typedData = response.data as { acf: T }[];
        setData(typedData[0].acf);
      })
      .catch((error) => {
        console.warn(`Fallo cargando ${uri}, usando fallback:`, error);
        // fallbackData ya está en el state
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading };
}
