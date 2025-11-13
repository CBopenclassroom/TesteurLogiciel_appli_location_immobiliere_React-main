import { describe, it, expect} from 'vitest'
import { render, screen, fireEvent} from '@testing-library/react'

import Collapse from '../src/components/Collapse/Collapse'

describe('Collapse', () => {
    it('renders correctly with children', () => {
        render(<Collapse title="titre" text="test" />)

        expect(screen.getByText("test")).toBeInTheDocument()
        expect(screen.getByText("titre")).toBeInTheDocument()
    })

    it('applies the rotated-image class on click', () => {
        render(<Collapse title="titre" text="test" />)
        const img = (screen.getByAltText('vector'))
        fireEvent.click(img)
        expect(img).toHaveClass('rotated-image')
    })

    it('text become a list if a list has been inputed', () => {
        render(<Collapse title="titre" text={[1, 2, 3, 4]} />)
        const textArray = [1, 2, 3, 4]
        const listItems = screen.getAllByRole('listitem')
        expect(listItems).toHaveLength(textArray.length)
    })

      it('check if string use correct type', () => {
        render(<Collapse title="titre" text="text" />)
        const text = (screen.getByText("text"))
        expect(text.tagName.toLowerCase()).toBe("p");
    })

})
