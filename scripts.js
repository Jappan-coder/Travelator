function search() {
    const query = document.getElementById('search-bar').value;
    alert('Searching for: ' + query);
    // Add your search functionality here
}

// Additional JavaScript for dynamic content
document.addEventListener('DOMContentLoaded', function() {
    const destinations = [
        { name: "Paris, France", description: "The city of light and love, known for its art, culture, and iconic landmarks like the Eiffel Tower." },
        { name: "Kyoto, Japan", description: "Experience traditional Japanese culture, beautiful temples, and stunning gardens in Kyoto." },
        { name: "New York City, USA", description: "A bustling metropolis known for its skyscrapers, theaters, and diverse culture." },
        { name: "Cape Town, South Africa", description: "A stunning city with beautiful beaches, Table Mountain, and rich history." },
        { name: "Sydney, Australia", description: "Known for its Sydney Opera House, beautiful harbor, and vibrant culture." },
        { name: "Rio de Janeiro, Brazil", description: "Famous for its Carnival, Christ the Redeemer statue, and stunning beaches." }
    ];

    const stories = [
        { title: "A Journey Through the Alps", excerpt: "Exploring the breathtaking beauty of the Swiss Alps, from snow-capped peaks to charming villages." },
        { title: "Backpacking in South America", excerpt: "Discover the vibrant cultures, stunning landscapes, and rich history of South America." },
        { title: "A Culinary Tour of Italy", excerpt: "Indulge in the delicious cuisine of Italy, from pasta and pizza to gelato and espresso." },
        { title: "Exploring Ancient Egypt", excerpt: "Uncover the mysteries of ancient Egypt, from the pyramids to the Sphinx and the Nile." },
        { title: "Adventure in New Zealand", excerpt: "Experience the stunning landscapes, adventure sports, and Maori culture of New Zealand." },
        { title: "Road Trip Across the USA", excerpt: "A journey through the diverse landscapes, cultures, and cities of the United States." }
    ];

    const destinationContainer = document.querySelector('.featured-destinations');
    const storyContainer = document.querySelector('.latest-stories');

    destinations.forEach(dest => {
        const destDiv = document.createElement('div');
        destDiv.className = 'destination';
        destDiv.innerHTML = `<h3>${dest.name}</h3><p>${dest.description}</p>`;
        destinationContainer.appendChild(destDiv);
    });

    stories.forEach(story => {
        const storyDiv = document.createElement('div');
        storyDiv.className = 'story';
        storyDiv.innerHTML = `<h3>${story.title}</h3><p>${story.excerpt}</p>`;
        storyContainer.appendChild(storyDiv);
    });
});
