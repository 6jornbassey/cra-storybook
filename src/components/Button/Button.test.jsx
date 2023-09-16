import { render, screen } from '@testing-library/react'
import Button from './Button'
import Meta, { Primary, Red } from './Button.stories'
import { composeStory } from '@storybook/react'
const PrimaryButton = composeStory(Primary, Meta)
const RedButton = composeStory(Red, Meta)
test("should render Button", () => {
    const label = "Click me!"
    render(<Button label={label} />)
    const btnElm = screen.getByRole("button")
    expect(btnElm).toBeInTheDocument();
    expect(btnElm).toHaveTextContent("Click")
})

test("should render Primary Button", () => {
    render(<PrimaryButton />)
    const btnElm = screen.getByRole("button")
    expect(btnElm).toHaveClass("storybook-button--primary")
})

test("should render Red Button", () => {
    render(<RedButton />)
    const btnElm = screen.getByRole("button")
    expect(btnElm).toHaveStyle("background-color: red")
})
