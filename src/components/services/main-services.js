export const fetchAllPlayers = () => {
fetch("http://localhost:3000/api/players")
  .then(response => response.json());
}
