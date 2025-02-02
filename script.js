function calculatePrice() {
    // Lista de prețuri pentru fiecare model și reparație
    const priceList = {
        display: {
            iphone13: 900,
            iphone12: 800,
            iphone11: 700
        },
        baterie: {
            iphone13: 300,
            iphone12: 250,
            iphone11: 200
        },
        camera: {
            iphone13: 500,
            iphone12: 450,
            iphone11: 400
        }
    };

    // Preluăm selecțiile utilizatorului
    const service = document.getElementById("service").value;
    const model = document.getElementById("model").value;

    // Calculăm prețul
    const price = priceList[service][model] || "-";

    // Afișăm prețul estimat
    document.getElementById("price-output").innerText = `Preț estimativ: ${price} RON`;
}
