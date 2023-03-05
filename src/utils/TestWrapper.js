
import { BrowserRouter } from 'react-router-dom';
import { render } from "@testing-library/react";

const TestWrapper = ({ children }) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );
}

const customRender = (ui, options) => render(ui, { wrapper: TestWrapper, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
