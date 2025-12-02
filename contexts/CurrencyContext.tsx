'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Currency = 'EUR' | 'MAD';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  convertPrice: (eurPrice: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const CONVERSION_RATE = 10.5; // 1 EUR = ~10.5 MAD

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('EUR');

  const convertPrice = (eurPrice: number): string => {
    if (currency === 'EUR') {
      return `€${eurPrice}`;
    }
    const madPrice = Math.round(eurPrice * CONVERSION_RATE);
    return `${madPrice} MAD`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
