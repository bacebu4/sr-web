import { useEffect, useState } from "react";

export const useLocalStorage = (
  method: "GET" | "POST",
  key: string,
  value?: string
): string | null => {
  const [storageValue, setStorageValue] = useState<string | null>(null);

  useEffect(() => {
    if (method === "GET") {
      try {
        const itemByKey = localStorage.getItem(key);
        if (itemByKey) {
          setStorageValue(JSON.parse(itemByKey)[key]);
        }
      } catch (error) {
        setStorageValue(null);
        console.error(error);
      }
    }
  }, [key, method, value]);

  return storageValue;
};
