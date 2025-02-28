"use client";

import { useEffect, useState } from "react";

const useClients = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    if (!isClient) {
      setIsClient(true);
    }
  }, [isClient]);
  return isClient;
};

export default useClients;
