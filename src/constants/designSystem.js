// Global Design System Constants
export const DESIGN_SYSTEM = {
  // Colors
  colors: {
    primary: '#ff3c00',
    primaryHover: '#e63500',
    primaryLight: '#fff5f3',
    
    text: {
      primary: '#000000',
      secondary: '#666666',
      light: '#999999'
    },
    
    background: {
      white: '#ffffff',
      light: '#f8f9fa',
      dark: '#000000'
    },
    
    border: '#e9ecef',
    shadow: 'rgba(0, 0, 0, 0.1)'
  },

  // Typography
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    
    headings: {
      h1: {
        fontSize: '3rem',
        fontWeight: '700',
        lineHeight: '1.2',
        marginBottom: '1rem'
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: '700',
        lineHeight: '1.2',
        marginBottom: '1rem'
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: '600',
        lineHeight: '1.3',
        marginBottom: '0.75rem'
      },
      subtitle: {
        fontSize: '1rem',
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginBottom: '0.5rem'
      }
    },
    
    body: {
      fontSize: '1rem',
      lineHeight: '1.6',
      marginBottom: '1rem'
    }
  },

  // Spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
    xxxl: '4rem'
  },

  // Layout
  layout: {
    maxWidth: '1200px',
    containerPadding: '2rem',
    sectionPadding: '4rem 2rem',
    borderRadius: '8px',
    cardPadding: '2rem'
  },

  // Breakpoints
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    large: '1200px'
  }
};