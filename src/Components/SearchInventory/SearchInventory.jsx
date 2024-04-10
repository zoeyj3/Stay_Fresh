import InventoryListItem from "../InventoryListItem/InventoryListItem"
function SearchInventory({searchedItemData}){
    console.log(searchedItemData.name)

    return(
    <>
    <p>SearchInventory:{searchedItemData.name}</p>
    <InventoryListItem inventory={searchedItemData}/>
    </>
    )
}
export default SearchInventory
