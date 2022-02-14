import { getShipCountry, getCountryImage } from '../utils/helpers';

// Tests for getShipCountry() 
test('Returns correct country name', () => {
    expect(getShipCountry('Example owner (Germany)')).toBe('Germany');
});

test('Returns N/A when no country is available', () => {
  expect(getShipCountry('Example owner with no country')).toBe('N/A');
});

test('Fails if parentheses are not closed', () => {
  expect(getShipCountry('Example owner with (invalid format')).toBe('N/A');
});

// Tests for getCountryImage()
test('Returns correct country image', () => {
  expect(getCountryImage('France')).toBe('france.jpeg');
});

test('Returns no country image if no country is available', () => {
  expect(getCountryImage('')).toBe('');
});

test('Returns no country image if country is not registered (per se)', () => {
  expect(getCountryImage('The Fakest Country')).toBe('');
});