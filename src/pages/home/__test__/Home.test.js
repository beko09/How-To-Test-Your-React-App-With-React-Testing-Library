import { render } from "../../../utils/TestWrapper";
import { screen } from "@testing-library/react"
import Home from "../Home";

describe("Home", () => {
    it("should render heading element", () => {
        render(<Home />);
        const heading = screen.getByRole('heading', {
            name: /welcome to test todo app by react testing library/i
        })
        expect(heading).toBeInTheDocument();
    })

    it("should render span element to containt", () => {
        render(<Home />);
        const spanElement = screen.getByText('Todo app')
        expect(spanElement).toBeInTheDocument();
    })
})