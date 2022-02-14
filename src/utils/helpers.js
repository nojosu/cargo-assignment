///////////////////
// Helper functions
///////////////////
import HongKong from '../images/hongkong.jpeg';
import Germany from '../images/germany.jpeg';
import France from '../images/france.jpeg';
import Switzerland from '../images/switzerland.jpeg';
import China from '../images/china.jpeg';
import Kuwait from '../images/kuwait.jpeg';
import Britain from '../images/britain.jpeg';
import Japan from '../images/japan.jpeg';
import Singapore from '../images/singapore.jpeg';
import SouthKorea from '../images/southkorea.jpeg';
import Greece from '../images/greece.jpeg';
import Denmark from '../images/denmark.jpeg';

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

// Return a different background image depending on the country
export const getCountryImage = (country) => {
  if (country === "Hong Kong" || country === "HK") {
    return HongKong;
  } else if (country === "Germany") {
    return Germany;
  } else if (country === "France") {
    return France;
  } else if (country === "Switzerland") {
    return Switzerland;
  } else if (country === "China") {
    return China;
  } else if (country === "Kuwait") {
    return Kuwait;
  } else if (country === "Denmark") {
    return Denmark;
  } else if (country === "British" || country === "Britain") {
    return Britain;
  } else if (country === "Japan") {
    return Japan;
  } else if (country === "Singapore") {
    return Singapore;
  } else if (country === "Denmark") {
    return Greece;
  } else if (country === "South Korea") {
    return SouthKorea;
  } else if (country === "Greece") {
    return Greece;
  } else {
    return '';
  }
} 

///////////////////
// Constants
///////////////////