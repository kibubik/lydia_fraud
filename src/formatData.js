export const formatCurrency = (number) => (
  number.toLocaleString('fr-FR', {
    style: "currency",
    currency: "EUR"
  })
);

export const formatPercentage = (percentage) => (
  `${percentage}%`
);

export const formatTransaction = (number) => (
  `${number} transaction${number>1&&"s"}`
);

export const formatTime = (seconds) => {
  const decomposition = [
    Math.floor(seconds / 60 / 60 / 24), // DAYS
    Math.floor(seconds / 60 / 60) % 24, // HOURS
    Math.floor(seconds / 60) % 60, // MINUTES
    seconds % 60 // SECONDS
  ];
  const names = ["day", "hour", "minute", "second"];
  return decomposition.reduce(
    (previous, current, i) => {
      current > 0 && previous.push(`${current} ${names[i]}${current>1&&"s"}`);
      return previous
    }, []).join(' ')
}