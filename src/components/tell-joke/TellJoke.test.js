import { render, screen } from "@testing-library/react"
import TellJoke from "./TellJoke"
import userEvent from "@testing-library/user-event"


//mocks

describe('Git profile test', () => {
    beforeEach(() => {
       //any common stuffs b/w all tests
    });

    const myUrl = "/mock"
    it('should render Tell joke button', () => {
        render(<TellJoke url={myUrl} />)

        expect(screen.getByRole('button', { name: 'Tell Joke' })).toBeInTheDocument()
    })

    it('should show Loader text when Tell Joke button is clicked', () => {
        render(<TellJoke url={myUrl} />)

        userEvent.click(screen.getByRole('button', { name: 'Tell Joke' }))

        expect(screen.getByText("Loading...")).toBeInTheDocument()
    })

    it('should not show Tell Joke button while loading', () => {
        render(<TellJoke url={myUrl} />)

        userEvent.click(screen.getByRole('button', { name: 'Tell Joke' }))

        expect(screen.queryByRole('button', { name: 'Tell Joke' })).not.toBeInTheDocument()
    })

    //Other tests
})