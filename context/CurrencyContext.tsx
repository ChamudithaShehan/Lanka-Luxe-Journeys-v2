'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Currency = 'USD' | 'KRW' | 'EUR' | 'GBP';

interface CurrencyInfo {
  code: Currency;
  symbol: string;
  rateFromUSD: number;
  name: string;
}

export const CURRENCIES: Record<Currency, CurrencyInfo> = {
  USD: { code: 'USD', symbol: '$', rateFromUSD: 1.0, name: 'USD ($)' },
  KRW: { code: 'KRW', symbol: '₩', rateFromUSD: 1350, name: 'KRW (₩)' },
  EUR: { code: 'EUR', symbol: '€', rateFromUSD: 0.92, name: 'EUR (€)' },
  GBP: { code: 'GBP', symbol: '£', rateFromUSD: 0.79, name: 'GBP (£)' }
};

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (usdAmount: number) => string;
  convertPrice: (usdAmount: number) => number;
  currentCurrencyInfo: CurrencyInfo;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'USD',
  setCurrency: () => {},
  formatPrice: (amount) => `$${amount.toLocaleString()}`,
  convertPrice: (amount) => amount,
  currentCurrencyInfo: CURRENCIES.USD
});

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<Currency>('USD');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('llj_currency') as Currency;
      if (saved && CURRENCIES[saved]) {
        setCurrencyState(saved);
      }
    } catch {}
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    try {
      localStorage.setItem('llj_currency', c);
    } catch {}
  };

  const convertPrice = (usdAmount: number): number => {
    const rate = CURRENCIES[currency]?.rateFromUSD || 1.0;
    if (currency === 'KRW') {
      // Round to nearest 10,000 KRW
      return Math.round((usdAmount * rate) / 10000) * 10000;
    }
    // Round to nearest 10 for EUR/GBP
    return Math.round((usdAmount * rate) / 10) * 10;
  };

  const formatPrice = (usdAmount: number): string => {
    if (!usdAmount || usdAmount === 0) return 'Custom Quote';
    const info = CURRENCIES[currency] || CURRENCIES.USD;
    const converted = convertPrice(usdAmount);

    if (currency === 'KRW') {
      return `₩${converted.toLocaleString()}`;
    }
    return `${info.symbol}${converted.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        convertPrice,
        currentCurrencyInfo: CURRENCIES[currency]
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
