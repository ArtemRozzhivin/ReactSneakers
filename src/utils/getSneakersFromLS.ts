export const getSneakersFromLs = () => {
  const result = localStorage.getItem('sneakers');

  return result ? JSON.parse(result) : [];
};
