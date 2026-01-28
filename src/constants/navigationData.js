// Navigation constants
export const NAVIGATION_ITEMS = [
  {
    id: 1,
    label: "Home",
    href: "#home",
    type: "main"
  },
  {
    id: 2,
    label: "About",
    href: "#faq",
    type: "main"
  },
  {
    id: 3,
    label: "Vehicle Models",
    href: "#vehicles",
    type: "main"
  },
  {
    id: 4,
    label: "Testimonials",
    href: "#testimonials",
    type: "main"
  },
  {
    id: 5,
    label: "Our Team",
    href: "#team",
    type: "main"
  },
  {
    id: 6,
    label: "Contact",
    href: "#footer",
    type: "main"
  }
];

export const AUTH_ITEMS = [
  {
    id: 1,
    label: "Sign in",
    href: "/sign-in",
    type: "auth",
    className: ""
  },
  {
    id: 2,
    label: "Register",
    href: "/register",
    type: "auth",
    className: "register-button"
  }
];

// UI Text constants for Header
export const HEADER_TEXT = {
  brand: "Car Rental",
  mobileMenuTitle: "Menu",
  closeButton: "×"
};

// Helper function to get all navigation items for mobile menu
export const getAllNavigationItems = () => [
  ...NAVIGATION_ITEMS,
  ...AUTH_ITEMS
];