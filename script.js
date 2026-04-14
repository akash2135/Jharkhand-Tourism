// Places Data
const places = [
    {
        name: "Hundru Falls",
        category: "Nature",
        description: "One of the highest waterfalls in Jharkhand."
    },
    {
        name: "Rock Garden",
        category: "Nature",
        description: "A beautiful garden with rock sculptures in Ranchi."
    },
    {
        name: "Netarhat",
        category: "Nature",
        description: "Famous for sunrise and sunset views."
    },
    {
        name: "Baidyanath Dham",
        category: "Religious",
        description: "One of the 12 Jyotirlingas located in Deoghar."
    },
    {
        name: "Betla National Park",
        category: "Adventure",
        description: "Wildlife sanctuary with forest safari."
    },
    {
        name: "Parasnath Hill",
        category: "Religious",
        description: "Sacred Jain pilgrimage site."
    }
];

// Select cards container
const cardsContainer = document.querySelector(".cards");

// Function to display places
function displayPlaces(category) {
    cardsContainer.innerHTML = "";

    const filteredPlaces = category === "All"
        ? places
        : places.filter(place => place.category === category);

    filteredPlaces.forEach(place => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${place.name}</h3>
            <p>Category: ${place.category}</p>
            <button onclick="handleViewDetails('${place.name}')">
                View Details
            </button>
        `;

        cardsContainer.appendChild(card);
    });
}

// Filter function
function filterCategory(category) {
    displayPlaces(category);
}

// Handle View Details Click (Updated for All Pages)
function handleViewDetails(name) {

    if (name === "Hundru Falls") {
        window.location.href = "hundru.html";
    } 
    else if (name === "Rock Garden") {
        window.location.href = "rockgarden.html";
    }
    else if (name === "Netarhat") {
        window.location.href = "netarhat.html";
    }
    else if (name === "Baidyanath Dham") {
        window.location.href = "baidyanath.html";
    }
    else if (name === "Betla National Park") {
        window.location.href = "betla.html";
    }
    else if (name === "Parasnath Hill") {
        window.location.href = "parasnath.html";
    }

}

// Show all places when page loads
displayPlaces("All");