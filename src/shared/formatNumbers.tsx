export const FormatNumbers = (number: number): string => {
    if (number >= 1_000_000_000) {
      // Formatar para bilhões com uma casa decimal
      return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    } else if (number >= 1_000_000) {
      // Formatar para milhões com uma casa decimal
      return (number / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (number >= 1_000) {
      // Formatar para milhares com uma casa decimal
      return (number / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
    } else {
      // Retornar o número como string sem formatação adicional
      return number.toString();
    }
  };
  