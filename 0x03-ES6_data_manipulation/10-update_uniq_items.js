def updateUniqueItems(groceries_map):
    if not isinstance(groceries_map, dict):
        raise ValueError("Cannot process")
    
    for item, quantity in groceries_map.items():
        if quantity == 1:
            groceries_map[item] = 100
    
    return groceries_map

# Test the function
initial_groceries = {
    'Apples': 1,
    'Tomatoes': 10,
    'Pasta': 1,
    'Rice': 1,
    'Banana': 5
}
updated_groceries = updateUniqueItems(initial_groceries)
print(updated_groceries)
