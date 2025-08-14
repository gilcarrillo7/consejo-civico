import { useEffect, useState } from "react";
import axios from "axios";

export function useRemoteData<T>(url: string, fallbackData: T) {
  const [data, setData] = useState<T>(fallbackData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<T>(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(`Fallo cargando ${url}, usando fallback:`, error);
        // fallbackData ya está en el state
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
