export const currencyFormat = (value: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    useGrouping: true,
  }).format(value);
};

// Ejemplo de uso
// console.log(currencyFormat(50567)); // Salida: "$50.567"