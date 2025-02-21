'use client'
import type {ReactNode} from 'react';
import { CartProvider } from '@mrvautin/react-shoppingcart';

type Props={
    children: ReactNode;
}

export default function ProviderCart({ children }: Props) {
    return (
        <CartProvider>
        
        {children}
           
        </CartProvider>
    );
}