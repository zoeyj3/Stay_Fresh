import InventoryListItem from "../InventoryListItem/InventoryListItem";
import "./SearchResult.scss";

function SearchResult({
  searchedItemData,
  setUpdatedInventory,
  setItemChosen,
}) {
  console.log(searchedItemData);

  const CheckboxChange = (itemName, itemStatus) => {
    setItemChosen((prev) => ({
      ...prev,
      [itemName]: itemStatus,
    }));
  };

  return (
    <>
      <ul className="searchresult">
        {searchedItemData.map((inventory) => {
          return (
            <InventoryListItem
              key={inventory.id + "_insearch"}
              inventory={inventory}
              CheckboxChange={CheckboxChange}
              setUpdatedInventory={setUpdatedInventory}
            />
          );
        })}
      </ul>
    </>
  );
}
export default SearchResult;
