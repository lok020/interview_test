import { toBeValid } from '@testing-library/jest-dom/dist/matchers';
import { render, screen } from '@testing-library/react';
import App from '../App';
// import { act } from "react-dom/test-utils";

test('render APP.js', () => {
    const { init_state } = render(<App />);
    expect( init_state ).toBeValid;
});