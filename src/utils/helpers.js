// Helper functions

// Obtain a ship owner and, if available, return its country
// We could verify if the country actually exists, but that's a bit overkill atm :)
export const getShipCountry = (shipOwner) => {
  if(!shipOwner.includes('(' && ')')) return 'N/A';
  else { 
    return shipOwner.slice(
      shipOwner.indexOf('(') + 1,
      shipOwner.lastIndexOf(')')
    );
  }
}