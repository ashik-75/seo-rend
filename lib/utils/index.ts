interface CurrencyProps {
  amount: number;
  local?: string;
  currency?: string;
  decimalPlaces?: number;
}

export const formatCurrency = ({
  amount = 10,
  local = "en-US",
  currency = "USD",
  decimalPlaces = 2,
}: CurrencyProps) => {
  const formatter = new Intl.NumberFormat(local, {
    style: "currency",
    currency,
    maximumFractionDigits: decimalPlaces,
  });

  return isNaN(amount) ? "--" : formatter.format(amount);
};

export const capitalize = (text: string) => {
  const lower = text.toLowerCase();
  const first = lower.charAt(0).toUpperCase();
  return first + lower.slice(1);
};
