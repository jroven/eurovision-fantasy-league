import React from 'react';

const Card = ({ image, country, artist, title }) => {
  return (
    <div style={styles.card}>
      <img 
        src={image}  // Use the `image` prop passed from parent
        alt={title}  // Use the `title` prop for alt text
        style={styles.image}
      />
      <div style={styles.textContainer}>
        <h3 style={styles.country}>{country}</h3>
        <p style={styles.subtitle}>{artist} - {title}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '12px',  // Softer rounded corners
    padding: '15px',       // Added more padding for a spacious feel
    maxWidth: '320px',     // A slightly wider card
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Deeper shadow for a floating effect
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Smooth hover effect
    overflow: 'hidden',    // Ensures no content overflows the rounded corners
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'contain',    // Changed to cover to maintain aspect ratio
    borderRadius: '8px',   // Rounded corners for the image
  },
  textContainer: {
    marginLeft: '20px',    // More space between the image and the text
  },
  country: {
    margin: 0,
    fontSize: '22px',      // Larger font for the country name
    fontWeight: '700',     // Bold for emphasis
    color: '#333',
    letterSpacing: '1px',  // Slight letter spacing for a cleaner look
  },
  subtitle: {
    margin: '8px 0 0',     // Added space between the country and subtitle
    fontSize: '16px',      // Set both artist and title to the same size
    fontWeight: '500',     // Semi-bold for better readability
    color: '#777',         // Softer color for the subtitle
  },
};

export default Card;
