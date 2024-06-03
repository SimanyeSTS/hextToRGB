document.querySelector('#convertButton').addEventListener('click', () => {
    const hexInput = document.querySelector('#hexInput').value.trim();
    const rgb = hexToRgb(hexInput);
  
    if (rgb) {
      document.querySelector('#result').textContent = `RGB: ${rgb}`;
    } else {
      document.querySelector('#result').textContent = 'Invalid hex value. Please enter a valid hex code.';
    }
  });
  
  function hexToRgb(hex) {
    // Remove the leading '#' if present
    hex = hex.replace(/^#/, '');
  
    // Check for valid hex color length
    if (hex.length === 3) {
      // Convert shorthand hex color to full form
      hex = hex.split('').map(char => char + char).join('');
    }
  
    if (hex.length !== 6) {
      return null;
    }
  
    // Convert hex to integer values for r, g, and b
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
  
    return `${r}, ${g}, ${b}`;
  }
  