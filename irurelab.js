/**
 * Updates the state of an individual item in the list, as opposed to the environment of the list as a whole.
 * One way to achieve this is by using the `Array.prototype.map` method, which allows us to create a new
 * array with the updated item while preserving the other items unchanged.
 * 
 * @param {Array} list - The original list of items.
 * @param {number} id - The identifier of the item to be updated.
 * @param {function} updateFn - A function that takes the current item and returns the updated item.
 * @returns {Array} - The new list with the updated item.
 */
function updateListItem(list, id, updateFn) {
    return list.map(item => {
        if (item.id === id) {
            // Apply the update function to the matching item
            return updateFn(item);
        }
        // Return the item unchanged if it doesn't match the id
        return item;
    });
}

// Example usage:
const originalList = [
    { id: 1, name: 'Item 1', value: 10 },
    { id: 2, name: 'Item 2', value: 20 },
];

const updatedList = updateListItem(originalList, 2, item => ({
    ...item,
    value: item.value + 5
}));

console.log(updatedList);
// Output: [
//   { id: 1, name: 'Item 1', value: 10 },
//   { id: 2, name: 'Item 2', value: 25 }  // Updated item
// ]
