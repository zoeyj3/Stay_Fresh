import InventoryListItem from "../InventoryListItem/InventoryListItem"
function SearchInventory({searchedItemData}){
    console.log(searchedItemData)

    return(
    <>
    <ul>
    {searchedItemData.map((inventory) => {
          return (
            <InventoryListItem
            inventory={inventory}
            />
          );
        })
        }
    </ul>

    </>
    )
}
export default SearchInventory
