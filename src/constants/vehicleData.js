// Vehicle data constants
export const VEHICLES = [
  {
    id: 1,
    name: "Economy",
    image: "/images/economy.png",
    price: "$25",
    specs: {
      seats: "4",
      transmission: "Manual",
      airConditioning: "Yes",
      doors: "2",
      fuelType: "Petrol",
      luggage: "1 Large bag"
    },
    description: "Compact & Fuel Efficient"
  },
  {
    id: 2,
    name: "SUV",
    image: "/images/SUV.png",
    price: "$45",
    specs: {
      seats: "7",
      transmission: "Automatic",
      airConditioning: "Yes",
      doors: "5",
      fuelType: "Petrol/Diesel",
      luggage: "3 Large bags"
    },
    description: "Spacious & Powerful"
  },
  {
    id: 3,
    name: "Luxury",
    image: "/images/luxury.png",
    price: "$75",
    specs: {
      seats: "5",
      transmission: "Automatic",
      airConditioning: "Premium Climate",
      doors: "4",
      fuelType: "Premium Petrol",
      luggage: "2 Large bags"
    },
    description: "Premium & High-end"
  },
  {
    id: 4,
    name: "Van",
    image: "/images/van.png",
    price: "$55",
    specs: {
      seats: "8",
      transmission: "Automatic",
      airConditioning: "Yes",
      doors: "4",
      fuelType: "Diesel",
      luggage: "5 Large bags"
    },
    description: "Large & Family-friendly"
  },
  {
    id: 5,
    name: "Sports",
    image: "/images/sports.png",
    price: "$95",
    specs: {
      seats: "2",
      transmission: "Manual/Automatic",
      airConditioning: "Yes",
      doors: "2",
      fuelType: "Premium Petrol",
      luggage: "1 Small bag"
    },
    description: "Fast & Thrilling"
  }
];

// Specification labels for consistent display
export const SPEC_LABELS = {
  seats: "Seats",
  transmission: "Transmission",
  airConditioning: "Air Conditioning",
  doors: "Doors",
  fuelType: "Fuel Type",
  luggage: "Luggage"
};

// UI Text constants
export const UI_TEXT = {
  title: "Vehicle Models",
  subtitle: "Choose from our diverse fleet",
  rentButton: "Rent Now",
  specsTitle: "Specifications",
  priceUnit: "/day"
};