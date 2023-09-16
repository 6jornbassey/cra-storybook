import { render, screen } from '@testing-library/react'
import Button from './Button'
import * as stories from './Button.stories'
import { composeStories } from '@storybook/testing-react'
const { Primary, Red } = composeStories(stories)

test("should render Button", () => {
    const label = "Click me!"
    render(<Button label={label} />)
    const btnElm = screen.getByRole("button")
    expect(btnElm).toBeInTheDocument();
    expect(btnElm).toHaveTextContent("Click")
})

test("should render Primary Button", () => {
    render(<Primary />)
    const btnElm = screen.getByRole("button")
    expect(btnElm).toHaveClass("storybook-button--primary")
})

test("should render Red Button", () => {
    render(<Red />)
    const btnElm = screen.getByRole("button")
    expect(btnElm).toHaveStyle("background-color: red")
})
