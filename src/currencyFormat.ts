export const currencyFormat = (amount: string): string => {
    if (isNaN(parseFloat(amount))) {
      return "NaN";
    }
    const numberAmount = Number(amount.replace(",", ".")).toFixed(2).toString();
  
    const formattedAmount = `£${numberAmount.replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
  
    return formattedAmount;
  };