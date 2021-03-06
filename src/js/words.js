const ingredientTypes = {
    spice: 'spice',
    herb: 'herb',
    carbs: 'carbs',
    dairy: 'dairy',
    protein: 'protein',
    fat: 'fat',
    fruit: 'fruit',
    vegetable: 'vegetable',
    meat: 'meat',
    condiment: 'condiment',
    fish: 'fish',
    nut: 'nut',
};

const {
    spice,
    herb,
    carbs,
    dairy,
    protein,
    fat,
    fruit,
    vegetable,
    meat,
    condiment,
    fish,
    nut,
} = ingredientTypes;

export const decimals = [
    0, 0.25, 0.5, 0.3, 0.8, 0.75
];

export const measurements = [
    'teaspoon',
    'tablespoon',
    'cup',
    'lb',
    'pint',
    'quart',
    'fluid ounce',
    'gallon',
    'ml',
    'litre',
    'pound',
    'kilogram',
    'gram',
];

export const ingredients = [
    { name: 'salt', type: spice },
    { name: 'red chili flakes', type: spice },
    { name: 'pepper', type: spice },
    { name: 'paprika', type: spice },
    { name: 'oregano', type: herb },
    { name: 'tumeric', type: spice },
    { name: 'cayenne pepper', type: spice },
    { name: 'thyme', type: herb },
    { name: 'cinnamon', type: spice },
    { name: 'sugar', type: spice },
    { name: 'pasta', type: carbs },
    { name: 'rice', type: carbs },
    { name: 'couscous', type: carbs },
    { name: 'quinoa', type: carbs },
    { name: 'flour', type: carbs },
    { name: 'baking powder', type: carbs },
    { name: 'milk', type: dairy },
    { name: 'butter', type: dairy },
    { name: 'egg', type: protein },
    { name: 'olive oil', type: fat },
    { name: 'apple', type: fruit },
    { name: 'asparagus', type: vegetable },
    { name: 'cheese', type: dairy },
    { name: 'orange', type: fruit },
    { name: 'zucchini', type: vegetable },
    { name: 'sesame seeds', type: fat },
    { name: 'bacon', type: meat },
    { name: 'carrots', type: vegetable },
    { name: 'celery', type: vegetable },
    { name: 'ketchup', type: condiment },
    { name: 'mayonnaise', type: condiment },
    { name: 'vinegar', type: condiment },
    { name: 'mustard', type: condiment },
    { name: 'honey', type: condiment },
    { name: 'maple syrup', type: condiment },
    { name: 'garlic', type: vegetable },
    { name: 'shallot', type: vegetable },
    { name: 'onion', type: vegetable },
    { name: 'potato', type: vegetable },
    { name: 'tomato', type: fruit },
    { name: 'soy sauce', type: condiment },
    { name: 'hot sauce', type: condiment },
    { name: 'lentils', type: vegetable },
    { name: 'black beans', type: vegetable },
    { name: 'mixed beans', type: vegetable },
    { name: 'kidney beans', type: vegetable },
    { name: 'chickpeas', type: vegetable },
    { name: 'lima beans', type: vegetable },
    { name: 'pinto beans', type: vegetable },
    { name: 'trout', type: fish },
    { name: 'salmon', type: fish },
    { name: 'cornstarch', type: carbs },
    { name: 'plain yogurt', type: dairy },
    { name: 'oats', type: carbs },
    { name: 'edamame', type: vegetable },
    { name: 'chicken breast', type: meat },
    { name: 'rolled oats', type: carbs },
    { name: 'parsley', type: herb },
    { name: 'chestnuts', type: nut },
    { name: 'kiwi', type: fruit },
    { name: 'banana', type: fruit },
    { name: 'coriander', type: herb },
    { name: 'feta', type: dairy },
    { name: 'goat cheese', type: dairy },
    { name: 'rosemary', type: herb },
    { name: 'basil', type: herb },
    { name: 'halloumi', type: dairy },
    { name: 'baking soda', type: carbs },
    { name: 'brown sugar', type: spice },
    { name: 'tofu', type: protein },
    { name: 'tempeh', type: vegetable },
    { name: 'seitan', type: protein },
    { name: 'bulgur', type: carbs },
    { name: 'soba noodles', type: carbs },
    { name: 'chia seeds', type: fat },
    { name: 'hemp hearts', type: vegetable },
    { name: 'flax seeds', type: fat },
    { name: 'hazelnuts', type: nut },
    { name: 'peanuts', type: nut },
    { name: 'brazil nuts', type: nut },
    { name: 'strawberries', type: fruit },
    { name: 'blueberries', type: fruit },
    { name: 'pine nuts', type: nut },
    { name: 'kale', type: vegetable },
    { name: 'tahini', type: fat },
    { name: 'artichoke', type: vegetable },
    { name: 'eggplant', type: vegetable },
    { name: 'okra', type: vegetable },
    { name: 'pumpkin', type: vegetable },
    { name: 'avocado', type: vegetable },
    { name: 'peppercorn', type: spice },
    { name: 'mustard seed', type: spice },
    { name: 'dill', type: herb },
    { name: 'fennel seeds', type: spice },
    { name: 'nutmeg', type: spice },
    { name: 'bay leaves', type: spice },
    { name: 'bread crumbs', type: carbs },
    { name: 'yeast', type: carbs },
    { name: 'heavy cream', type: dairy },
    { name: 'parmesan cheese', type: dairy },
    { name: 'lemon', type: fruit },
    { name: 'lime', type: fruit },
    { name: 'raspberries', type: fruit },
    { name: 'canola oil', type: fat },
    { name: 'blackberries', type: fruit },
];

export const directions = [
    'Stir in the {ingredient} with the rest of the ingredients.',
    'Cook on high heat until browned and fragrant.',
    'Let sit for 10 minutes before serving.',
    'Preheat oven to 375°F.',
    'Line baking sheet with foil.',
    'Place {ingredient} in bowl and season with {ingredient} and {ingredient}, Toss with rubber spatula to thoroughly coat {ingredient} with oil and seasonings.',
    'Arrange {ingredient} on baking sheet.',
    'Roast {ingredient} on middle rack of oven until it is slightly brown, 20-30 minutes.',
    'Check to see that {ingredient} is done. Remove from oven or add time as needed.',
    'Transfer to a plate and serve immediately.',
    'Blend the {ingredient} and {ingredient} in a food processor for a few seconds, until the mixture looks like breadcrumbs.',
    'Stir in the {ingredient} and the {ingredient} and sprinkle over the cooked {ingredient} in the pie dish. Transfer to the oven to bake for 30 minutes or until crisp and golden-brown on top.',
    'In a large pot over medium high heat, add the {ingredient}, {ingredient}, {ingredient}, and {ingredient}. Sauté until tender 4-5 minutes. Add the {ingredient}, {ingredient}, and {ingredient} and {ingredient} and {ingredient} for 1 minute more.',
    'Bake the {ingredient} in a preheated 200°F oven for 20 minutes until they are soft. Remove from oven and once cool enough to handle, peel.',
    'Store it in an airtight container and freeze it for up to 6 months.',
    'Adjust the flavorings and add the {ingredient} if the {ingredient} is too acidic.',
    'Check occasionally and add a bit of {ingredient}, if you need to.',
    'Stir in fresh {ingredient} and serve the {ingredient} over {ingredient}.',
    'Mix the first two ingredients in a large bowl.',
    'Grease the pan with butter.',
    'In a small bowl, mix together the {ingredient} and {ingredient}.',
    'Use an electric mixer to mix the {ingredient}, {ingredient} and {ingredient}.',
    'Put the {ingredient}, {ingredient} and {ingredient} in your food processor and chop to a pulp.',
];
