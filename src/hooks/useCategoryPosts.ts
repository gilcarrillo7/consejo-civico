import { useEffect, useState } from "react";
import axios from "axios";

type WpPostWithAcf<T> = {
  acf?: T;
};

export function useCategoryPosts<T = unknown>(
  categoryId: number,
  fallbackData: T[] = []
) {
  const [data, setData] = useState<T[]>(fallbackData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!categoryId) {
      setData(fallbackData);
      setLoading(false);
      return;
    }

    setLoading(true);
    const url = `https://ccic.org.mx/wp/wp-json/wp/v2/posts?categories=${categoryId}&_embed&_=${Date.now()}&per_page=100`;

    axios
      .get<WpPostWithAcf<T>[]>(url)
      .then(({ data }) => {
        const acfs = data.map((p) => p.acf).filter((v): v is T => v != null);
        const ordered = acfs.sort((a, b) => a.order - b.order);
        setData(ordered);
      })
      .catch((error) => {
        console.warn(
          `Fallo cargando posts de la categoría ${categoryId}, usando fallback:`,
          error
        );
        // fallbackData ya está en state
      })
      .finally(() => setLoading(false));
  }, [categoryId, fallbackData]);

  return { data, loading };
}
