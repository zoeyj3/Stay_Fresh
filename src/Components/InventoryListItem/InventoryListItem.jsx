function InventoryListItem(inventory){
    return(
    <>
    <p>hi I am {inventory.name}, {inventory.servings} left, before {inventory.best_before}</p>
    </>
    )
}
export default InventoryListItem
