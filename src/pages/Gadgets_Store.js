import Store from "../components/Store.js";

const Gadgets_Store = () => {
  const gadgetsApi =
    "https://cors.bridged.cc/https://www.giantbomb.com/api/accessories/?api_key=7f9b7323ec1c30899894f4e95b9e551f7f58860d&limit=20&format=json&sort=date_added:desc";
  return (
    <>
      <Store api={gadgetsApi}></Store>
    </>
  );
};

export default Gadgets_Store;
