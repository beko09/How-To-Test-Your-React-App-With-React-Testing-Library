import { render } from "../../../utils/TestWrapper";
import { screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import TodoList from "../TodoList";


const addTodo = (todos) => {
    const inputElement = screen.getByPlaceholderText(/write todo.../i);
    const btnAddtElement = screen.getByRole("button", { name: "add" });

    todos.forEach(todo => {
        fireEvent.change(inputElement, { target: { value: todo } })
        userEvent.click(btnAddtElement)
    })
}

describe("TodoList", () => {

    it("render text no todo if no todos", () => {
        render(<TodoList />)
        const paragElement = screen.getByText(/Todo is empty/i)
        expect(paragElement).toBeInTheDocument()
        expect(paragElement.textContent.trim()).toBe("Todo is empty")
    })
    it("render text no todo", () => {
        render(<TodoList />)
        const paragElement = screen.getByTestId("empty")
        expect(paragElement).toBeInTheDocument()
    })

    it("should render same text in div by click btn add", () => {
        render(<TodoList />)
        addTodo(['go to home'])
        // const inputElement = screen.getByPlaceholderText(/write todo.../i);
        // // const btnAddtElement = screen.getByText(/add/i);
        // const btnAddtElement = screen.getByRole("button", { name: "add" });
        // fireEvent.change(inputElement, { target: { value: "go to home" } })
        // fireEvent.click(btnAddtElement)
        const itemElement = screen.getByTestId("todo");
        expect(itemElement).toBeInTheDocument()
        expect(itemElement.textContent).toBe("go to home")
    })

    it("should render mullite text todos", () => {
        render(<TodoList />)
        addTodo(['go to home', 'hello world'])
        const itemElements = screen.getAllByTestId("todo");
        expect(itemElements.length).toBe(2)
    })
    it("should todo is complete and have class complete", () => {
        render(<TodoList />)
        addTodo(['go to home'])
        const itemElements = screen.getByTestId("todo");
        userEvent.click(itemElements)
        // userEvent.hover(itemElements)

        //  go to icon file and add testid
        const icon = screen.getByTestId("icon");
        expect(itemElements).toHaveClass("complete-todo")
        expect(icon).toBeInTheDocument()
    })




})