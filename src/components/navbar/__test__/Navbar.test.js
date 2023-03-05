import { screen } from '@testing-library/react';
import { render } from '../../../utils/TestWrapper';
import Navbar from '../Navbar';

describe("Navbar", () => {

    it('should render heading to the document', () => {
        render(<Navbar title="beko" />)
        const titleElement = screen.getByText("beko");
        expect(titleElement).toBeInTheDocument();
    });
    it('should render heading to content same text', () => {
        render(<Navbar title="beko" />)
        const titleElement = screen.getByText("beko");
        expect(titleElement.textContent).toBe("beko");
    });
    it('should render heading by role', () => {
        render(<Navbar title="beko" />)
        const titleElement = screen.getByRole("heading", { name: "beko" });
        expect(titleElement).toBeInTheDocument();
    });
    it('should render  link element to content home', () => {
        render(<Navbar title="beko" />)
        const linkElement = screen.getByRole("link", { name: "Home" });
        expect(linkElement).toBeInTheDocument();
    });
    it('should render  link element to content about', () => {
        render(<Navbar title="beko" />)
        const linkElement = screen.getByRole("link", { name: /about/i });
        expect(linkElement).toBeInTheDocument();
    });

    it('should render multiple links element', () => {
        render(<Navbar title="beko" />)
        const linkElements = screen.getAllByRole("link");
        expect(linkElements.length).toBe(2);
    });
})