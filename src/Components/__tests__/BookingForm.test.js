import { render, screen } from "@testing-library/react";
import { initializeTimes, updateTimes } from "./BookingForm";

describe("initializeTimes function", () => {
  test("returns non-empty array of available booking times", () => {
    const availableTimes = initializeTimes();
    expect(availableTimes).toBeDefined();
    expect(Array.isArray(availableTimes)).toBe(true);
    expect(availableTimes.length).toBeGreaterThan(0);
  });
});

describe("updateTimes function", () => {
  test("returns updated availableTimes based on selected date", () => {
    const selectedDate = new Date("2023-07-15");
    const state = [];
    const updatedState = updateTimes(state, selectedDate);
    expect(updatedState).toBeDefined();
    expect(Array.isArray(updatedState)).toBe(true);
    expect(updatedState.length).toBeGreaterThan(0);
    // Add additional assertions if needed
  });
});
