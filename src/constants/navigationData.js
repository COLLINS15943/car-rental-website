// Navigation constants - Streamlined & Decluttered
export const NAVIGATION_ITEMS = [
  {
    id: "home",
    label: "Home",
    href: "#home"
  },
  {
    id: "vehicles",
    label: "Vehicles",
    href: "#vehicles"
  },
  {
    id: "why-us",
    label: "Why Us",
    href: "#why-us"
  },
  {
    id: "testimonials",
    label: "Reviews",
    href: "#testimonials"
  },
  {
    id: "faq",
    label: "FAQ",
    href: "#faq"
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact"
  }
];

export const AUTH_ITEMS = [
  {
    id: "sign-in",
    label: "Sign In",
    href: "#booking",
    className: "auth-signin-btn"
  }
];

// UI Text constants for Header
export const HEADER_TEXT = {
  brandFirst: "Drive",
  brandAccent: "X",
  brandFull: "Car Rental",
  mobileMenuTitle: "Navigation",
  closeButton: "✕"
};

// Helper function to get all navigation items for mobile menu
export const getAllNavigationItems = () => [
  ...NAVIGATION_ITEMS,
  ...AUTH_ITEMS
];