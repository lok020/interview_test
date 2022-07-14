import { render, screen } from '@testing-library/react';
import App from '../App';
test('check step1 exist', () => {
    render(<App />);
    expect( screen.getByTestId('step1') ).toBeInTheDocument;
});

test('check step1 firstname title correct', () => {
    render(<App />);
    expect( screen.getByTestId('First Name-title').innerHTML ).toEqual("First Name");
});

test('check step1 firstname input correct', () => {
    render(<App />);
    expect( screen.getByTestId('First Name-input').innerHTML ).toEqual("");
});

test('check step1 Surname title correct', () => {
    render(<App />);
    expect( screen.getByTestId('Surname-title').innerHTML ).toEqual("Surname");
});

test('check step1 Surname input correct', () => {
    render(<App />);
    expect( screen.getByTestId('Surname-input').innerHTML ).toEqual("");
});

test('check step1 Email Address: title correct', () => {
    render(<App />);
    expect( screen.getByTestId('Email Address:-title').innerHTML ).toEqual("Email Address:");
});

test('check step1 Email Address: input correct', () => {
    render(<App />);
    expect( screen.getByTestId('Email Address:-input').innerHTML ).toEqual("");
});