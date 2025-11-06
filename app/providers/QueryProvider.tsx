'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useState } from "react";

interface QueryProviderProps{
    children: React.ReactNode
}

const MODE = process.env.NEXT_PUBLIC_DEVELOPMENT_MODE === 'dev' ? 'dev' : 'prod'
export function QueryProvider({ children }: QueryProviderProps) {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 5,
            }
        }
    }));

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {MODE === 'dev' && (
                <ReactQueryDevtools initialIsOpen={false} />
            )}
        </QueryClientProvider>
    )
}