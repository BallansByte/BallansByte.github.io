function calculateDieselVolume() {
    const dieselDensity = 0.832; // Density of diesel in kg/L
    const massTonnes = document.getElementById('dieselMassTonnes').value;
    if (massTonnes && !isNaN(massTonnes)) {
        const massKg = massTonnes * 1000; // Convert metric tonnes to kilograms
        const volumeLiters = massKg / dieselDensity; // Calculate volume in liters
        document.getElementById('dieselVolumeLiters').value = volumeLiters.toFixed(2);
    } else {
        alert('Please enter a valid mass in metric tonnes.');
    }
}

function clearDieselFields() {
    document.getElementById('dieselForm').reset();
    document.getElementById('dieselVolumeLiters').value = '';
}

function calculatePmsVolume() {
    const pmsDensity = 0.737; // Density of PMS in kg/L (typical value)
    const massTonnes = document.getElementById('pmsMassTonnes').value;
    if (massTonnes && !isNaN(massTonnes)) {
        const massKg = massTonnes * 1000; // Convert metric tonnes to kilograms
        const volumeLiters = massKg / pmsDensity; // Calculate volume in liters
        document.getElementById('pmsVolumeLiters').value = volumeLiters.toFixed(2);
    } else {
        alert('Please enter a valid mass in metric tonnes.');
    }
}

function clearPmsFields() {
    document.getElementById('pmsForm').reset();
    document.getElementById('pmsVolumeLiters').value = '';
}
/**************************************************************************************************************************** */
document.getElementById('pricing-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve user input and convert to float
    const liters = parseFloat(document.getElementById('liters').value);
    const price = parseFloat(document.getElementById('price').value);

    // Check if inputs are valid numbers
    if (isNaN(liters) || isNaN(price)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }

    // Calculate total cost
    const totalCost = liters * price;

    // Format total cost with two decimal places and commas
    document.getElementById('result').textContent = `Total Cost: $${totalCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
});


/****************************************************************************************************************************** */
// Liters input form
document.getElementById('liters-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const litersInput = parseFloat(document.getElementById('liters-input').value);

    if (isNaN(litersInput)) {
        document.getElementById('liters-result').textContent = 'Please enter valid liters.';
        return;
    }

    // Calculate the number of trucks needed
    const truckCapacity = 54000; // capacity in liters
    const numberOfTrucks = (litersInput / truckCapacity).toFixed(2); // Calculate and format to two decimal places

    document.getElementById('liters-result').textContent = `You will need approximately ${numberOfTrucks} truck(s) for ${litersInput} liters.`;
});