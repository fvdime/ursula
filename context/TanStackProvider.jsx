"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryCLient = new QueryClient()

export default function TanStackProvider({children}) {
  return <QueryClientProvider client={queryCLient}>{children}</QueryClientProvider>
}
