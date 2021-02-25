import Store from "../components/Store.js";

const Games_Store = () => {
  const gamesApi =
    "https://cors.bridged.cc/https://www.giantbomb.com/api/games/?api_key=7f9b7323ec1c30899894f4e95b9e551f7f58860d&limit=20&format=json&sort=date_last_updated:desc"; //7f9b7323ec1c30899894f4e95b9e551f7f58860d
  //b7d9a5a1b5d4d97811a92bebf8e480a3c0e20143

  return (
    <>
      <Store api={gamesApi}></Store>
    </>
  );
};

export default Games_Store;
