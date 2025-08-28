/**
 * @jest-environment jsdom
 */
// src/components/SearchBar.test.jsx
import { vi, describe, it, expect, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import SearchBar from "./SearchBar";

afterEach(() => {
  cleanup();
});

describe("SearchBar Component", () => {
  it("renders the search input field", () => {
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} />);
    const inputElement = screen.getByPlaceholderText("Search...");
    expect(inputElement).toBeInTheDocument();
  });

  it("displays custom placeholder when provided", () => {
    const mockOnSearch = vi.fn();
    const customPlaceholder = "Search users...";
    render(
      <SearchBar onSearch={mockOnSearch} placeholder={customPlaceholder} />
    );

    const inputElement = screen.getByPlaceholderText(customPlaceholder);
    expect(inputElement).toBeInTheDocument();
  });

  it("displays default placeholder when no prop is provided", () => {
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const inputElement = screen.getByPlaceholderText("Search...");
    expect(inputElement).toBeInTheDocument();
  });

  it("calls onSearch function with input value when user types", () => {
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} />);
    const inputElement = screen.getByPlaceholderText("Search...");
    const testValue = "hello world";

    fireEvent.change(inputElement, { target: { value: testValue } });

    expect(mockOnSearch).toHaveBeenCalledWith(testValue);
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
  });
});
