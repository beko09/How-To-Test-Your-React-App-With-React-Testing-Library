import { render } from "../../../utils/TestWrapper";
import { screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";


const mockTodo = jest.fn()

describe("AddInput", () => {
    it("should render input in the document", () => {
        render(<AddInput todos={[]} setTodos={mockTodo} />)
        const inputElement = screen.getByPlaceholderText(/write todo.../i);
        expect(inputElement).toBeInTheDocument()
    })
    it("should type in input", () => {
        render(<AddInput todos={[]} setTodos={mockTodo} />)
        const inputElement = screen.getByPlaceholderText(/write todo.../i);

        fireEvent.change(inputElement, { target: { value: "go to home" } })
        expect(inputElement.value).toBe("go to home")
    })
    it("should input empty after click btn add", () => {
        render(<AddInput todos={[]} setTodos={mockTodo} />)
        const inputElement = screen.getByPlaceholderText(/write todo.../i);
        // const btnAddtElement = screen.getByText(/add/i);
        const btnAddtElement = screen.getByRole("button", { name: "add" });
        fireEvent.change(inputElement, { target: { value: "go to home" } })
        fireEvent.click(btnAddtElement)
        expect(inputElement.value).toBe("")
    })



})