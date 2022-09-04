let breakfast = ["Instant Oatmeal With Cranberries and Pecans", "Roasted Potato and Chorizo Hash", "PB Chocolate Sheet Pan Pancake", "Lemon-Almond Poppy Seed Muffins", "Sausage and Egg Sandwiches", "Pineapple-Cucumber Smoothie", "French Toast", "Gruyère, Bacon and Spinach Scrambled Eggs", "Blueberry-Banana-Nut Smoothie", "Sheet Pan Sausage and Egg Breakfast Bake", "Old Bay Scrambled Eggs", "Blender Pancakes", "Make-Ahead Breakfast Burrito", "Smashed Avocado Toast with Egg", "Easy Zucchini Bread"];

let lunch = ["Buddha Bowls", "Mediterranean Chickpea Salad", "Buffalo Chicken Wrap", "Copycat Wendy's Chili", "Roasted Vegetable Baked Falafel Sandwiches", "Chinese Chicken Mandarin Salad", "Chicken Salad Sandwich", "Ham Sandwich", "Crunchwrap Supreme", "Caribbean Cobb Salad", "Copycat Chicken Lettuce Wraps", "Tuna Macaroni Salad", "Chirashi Bowls", "General Tso's Chicken"];

let dinner = ["Baked Feta Pasta", "One-Pan Creamy Chicken & Gnocchi", "Classic Stuffed Peppers", "Air Fryer Pork Chops", "Black Bean Tostadas", "Honey Garlic Glazed Salmon", "Bucatini all'Amatriciana", "Copycat Chicken Lettuce Wraps", "Homemade Crunchwrap Supreme", "BBQ Chicken Twice-Baked Potatoes", "Sheet-Pan Lemon Butter Chicken Thighs", "Shrimp & Snow Pea Stir Fry", "Slow-Cooker Chicken Posole", "TikTok Ramen", "Coconut Curry Salmon"];

//console.log(breakfast);

function randomMessage() {
    return `You're meal planner for the day is the following:\n
    Breakfast:- ${breakfast[Math.floor(Math.random() * 15)]}.\n
    Lunch:- ${lunch[Math.floor(Math.random() * 15)]}.\n
    Dinner:- ${dinner[Math.floor(Math.random() * 15)]}.`
}

console.log(randomMessage());