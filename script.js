let menubar = document.querySelector('#menu-bars')
let mynav = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function() {
    const fareForm = document.getElementById('fareForm');
    const fareResult = document.getElementById('fareResult');
    const fareAmount = document.getElementById('fareAmount');

    fareForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const fromCity = document.getElementById('fromCity').value;
        const toCity = document.getElementById('toCity').value;
        const cabType = document.getElementById('cabType').value;
        let costPerKm;

        // Set costPerKm based on selected cab type
        switch (cabType) {
            case 'Standard':
                costPerKm = 10;
                break;
            case 'Premium':
                costPerKm = 20;
                break;
            case 'Luxury':
                costPerKm = 50;
                break;
            default:
                costPerKm = 0; // Default value, should not happen due to "required" attribute
                break;
        }

        // Example: Using a placeholder function to simulate distance calculation
        const distance = calculateDistance(fromCity, toCity);

        if (!isNaN(distance)) {
            const fare = calculateFare(distance, costPerKm);
            fareAmount.textContent = `₹${fare.toFixed(2)}`;
            fareResult.style.display = 'block';
        } else {
            fareAmount.textContent = 'Invalid cities, please try again.';
            fareResult.style.display = 'block';
        }
    });

    // Placeholder function to calculate distance (for demonstration)
    function calculateDistance(fromCity, toCity) {
        // Here you can implement logic to fetch distance from an API or calculate based on coordinates
        const distances = {
            'delhi': {
                'greator noida': 39,
                'ghaziabad': 11,
                'gurugram': 25,
            },
            'greator noida': {
                'delhi': 39,
                'ghaziabad': 17,
                'gurugram': 16,
            },
            'ghazibad': {
                'delhi': 11,
                'greator noida': 17,
                'gurugram': 11,
            },
            'gurugram': {
                'ghaziabad': 25,
                'delhi': 16,
                'greator noida': 11,
            },
        };

        // Simulate fetching distance from the distances object (replace with API call)
        if (fromCity in distances && toCity in distances[fromCity]) {
            return distances[fromCity][toCity];
        } else {
            return NaN; // Return NaN for invalid city pairs
        }
    }

    // Function to calculate fare based on distance and cost per kilometer
    function calculateFare(distance, costPerKm) {
        let fare = distance * costPerKm;
        return fare;
    }
});
document.getElementById('menu-bars').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
});

