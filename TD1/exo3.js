var rental = {
  "cars": [
    {
      "id": "p306",
      "vehicule": "peugeot 306",
      "pricePerDay": 20,
      "pricePerKm": 0.10
    },
    {
      "id": "rr-sport",
      "pricePerDay": 60,
      "pricePerKm": 0.30
    },
    {
      "id": "p-boxster",
      "pricePerDay": 100,
      "pricePerKm": 0.45
    }
  ],
  "rentals": [
    {
      "id": "1-pb-92",
      "driver": {
        "firstName": "Paul",
        "lastName": "Bismuth"
      },
      "car_id": "p306",
      "pickupDate": "2015-09-12",
      "returnDate": "2015-09-14",
      "distance": 150
    },
    {
      "id": "2-rs-92",
      "driver": {
        "firstName": "Rebecca",
        "lastName": "Solanas"
      },
      "car_id": "rr-sport",
      "pickupDate": "2015-09-09",
      "returnDate": "2015-09-13",
      "distance": 550
    },
    {
      "id": "3-sa-92",
      "driver": {
        "firstName": " Sami",
        "lastName": "Ameziane"
      },
      "car_id": "p-boxster",
      "pickupDate": "2015-09-12",
      "returnDate": "2015-09-14",
      "distance": 100
    }
  ]
}

document.write("<div class=\"exo3\">");
document.write("<h1>Exo 3: les commissions</h1>");

for (var i = 0; i < rental.cars.length; i++)
{
  for (var j = 0; j < rental.rentals.length; j++)
  {
    if (rental.rentals[j].car_id === rental.cars[i].id)
    {
      //on obtient chaque rent
      document.write(rental.rentals[j].driver.firstName + " va payer ");

      //prix par km
      var rentalPriceKm = rental.rentals[j].distance * rental.cars[i].pricePerKm;

      //on get les dates
      var Date1 = new Date(rental.rentals[j].pickupDate);
      var Date2 = new Date(rental.rentals[j].returnDate);

      var millisecondsPerDay = 1000 * 60 * 60 * 24;
      var millisBetween = Date2.getTime() - Date1.getTime();
      var days = millisBetween / millisecondsPerDay;
      var locationTime = Math.floor(days) + 1;

      //prix par date
      var rentalPriceTime = (locationTime) * rental.cars[i].pricePerDay;

      if (locationTime > 1)
      {
        rentalPriceTime = (1 * rental.cars[i].pricePerDay) + ((locationTime - 1) * (rental.cars[i].pricePerDay) * 0.9);
      }
      else if (locationTime > 4)
      {
        rentalPriceTime = (4 * rental.cars[i].pricePerDay) + ((locationTime - 4) * (rental.cars[i].pricePerDay) * 0.7);
      }
      else if (locationTime > 10)
      {
        rentalPriceTime = (10 * rental.cars[i].pricePerDay) + ((locationTime - 10) * (rental.cars[i].pricePerDay) * 0.5);
      }

      var rentalPrice = rentalPriceKm + rentalPriceTime;
      document.write(rentalPrice + " &#8364;<br>");

      var brotherPrice = rentalPrice * 0.7;
      var insurance = rentalPrice * 0.3 / 2;
      var assistance = locationTime;
      var drivyPrice = (rentalPrice * 0.3) - insurance - assistance;

      document.write("Argent du frere : " + brotherPrice.toFixed(2) + " &#8364;<br>");
      document.write("Commission de : " + (rentalPrice * 0.3).toFixed(2) + " &#8364;<br>");
      document.write("Dont<br>");
      document.write("-insurance : " + insurance.toFixed(2) + " &#8364;<br>");
      document.write("-assistance : " + assistance.toFixed(2) + " &#8364;<br>");
      document.write("-drive : " + drivyPrice.toFixed(2) + " &#8364;<br><br><br>");
    }
  }
}

document.write("</div>");
