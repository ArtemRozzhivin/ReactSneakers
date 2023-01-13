export const getSneakersFromLs = () => {
  const result = localStorage.getItem('sneakers');
  console.log(result);

  return result ? JSON.parse(result) : [];
};
