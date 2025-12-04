// Header.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";
import { vi } from 'vitest';

// --- Mocks ---
window.HTMLElement.prototype.scrollIntoView = vi.fn();

const mockClassList = {
  toggle: vi.fn(),
};

vi.spyOn(document, "querySelector").mockImplementation(() => ({
  classList: mockClassList,
}));

describe("Header component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("Contact button scrolls to contact section", async () => {
    document.body.innerHTML = `<div id="section_form"></div>`;
    const contactSection = document.getElementById("section_form");

    render(<Header />);
    const user = userEvent.setup();

    const btnContact = screen.getByRole("button", { name: /contact/i });
    await user.click(btnContact);

    expect(contactSection.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });
    expect(mockClassList.toggle).toHaveBeenCalled();
  });
});
