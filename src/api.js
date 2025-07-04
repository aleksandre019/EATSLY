export async function fetchRestaurants() {
    const response = await fetch('https://api.example.com/restaurants');
    return await response.json();
}