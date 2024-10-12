export const formatPhoneNumber = (value: string) => {
  // Always keep +998 as the prefix
  const cleaned = value.replace(/\D/g, "").slice(3); // Strip everything but digits after +998

  if (cleaned.length <= 2) {
    return `+998 ${cleaned}`;
  }
  if (cleaned.length <= 5) {
    return `+998 ${cleaned.slice(0, 2)} ${cleaned.slice(2)}`;
  }
  if (cleaned.length <= 7) {
    return `+998 ${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(
      5
    )}`;
  }
  if (cleaned.length <= 9) {
    return `+998 ${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(
      5,
      7
    )} ${cleaned.slice(7)}`;
  }

  return `+998 ${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(
    5,
    7
  )} ${cleaned.slice(7, 9)}`;
};
