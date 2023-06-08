"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

function Provider(props: PropsWithChildren) {
  const pathname = usePathname();
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as any,
    });
  }, [pathname]);
  return (
    <QueryClientProvider client={client}>{props.children}</QueryClientProvider>
  );
}

export default Provider;
