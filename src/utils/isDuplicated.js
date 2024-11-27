const isDuplicated = (contacts, name, number) => {
  const normalizedName = name.toLowerCase();
  const normalizedNumber = number.toLowerCase();
  const duplicate = contacts.find(
    (el) =>
      el.name.toLowerCase() === normalizedName ||
      el.number.toLowerCase() === normalizedNumber
  );
  return duplicate;
};
export default isDuplicated;
