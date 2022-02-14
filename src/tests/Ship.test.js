import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Ship from '../views/Ship';

describe('Ship', () => {
  test('renders built, name, length, beam, TEU, owner, and gross tonnage fields', () => {
    const ship = {
      built: 2013,
      name: 'Madison Maersk',
      lengthMeters: 400,
      beamMeters: 59,
      maxTEU: 18270,
      owner: "Maersk",
      grossTonnage: 194849
    }

    const view = render(
      <Ship ship={ship} />
    );

    expect(view.container).toHaveTextContent(ship.built)
    expect(view.container).toHaveTextContent(ship.name)
    expect(view.container).toHaveTextContent(ship.lengthMeters)
    expect(view.container).toHaveTextContent(ship.beamMeters)
    expect(view.container).toHaveTextContent(ship.maxTEU)
    expect(view.container).toHaveTextContent(ship.owner)
    expect(view.container).toHaveTextContent(ship.grossTonnage)
  });

  test('renders country when available', () => {
    const ship = {
      built: 2013,
      name: 'Madison Maersk',
      lengthMeters: 400,
      beamMeters: 59,
      maxTEU: 18270,
      owner: "Maersk (Australia)",
      grossTonnage: 194849
    }

    const view = render(
      <Ship ship={ship} />
    );

    expect(view.container).toHaveTextContent('Australia')
  });
});