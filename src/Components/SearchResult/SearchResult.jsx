import InventoryListItem from "../InventoryListItem/InventoryListItem"
import "./SearchResult.scss"

function SearchResult({searchedItemData, setUpdatedInventory}){
    console.log(searchedItemData)

    return(
    <>
    <ul>
    {searchedItemData.map((inventory) => {
          return (
            <InventoryListItem
            key={inventory.id + "_insearch"}
            inventory={inventory}
            setUpdatedInventory={setUpdatedInventory}
            />
          );
        })
        }
    </ul>

    </>
    )
}
export default SearchResult
