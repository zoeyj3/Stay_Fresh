function InventoryListItem({inventory}){
    return(
    <>
    <p>{inventory.name}, {inventory.servings} left, before {inventory.best_before}</p>
    </>
    )
}
export default InventoryListItem
