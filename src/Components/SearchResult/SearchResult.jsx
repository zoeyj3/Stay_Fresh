import InventoryListItem from "../InventoryListItem/InventoryListItem"
import "./SearchResult.scss"

function SearchResult({searchedItemData}){
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
export default SearchResult
