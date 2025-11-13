import { describe, it, expect} from 'vitest'
import { render, screen} from '@testing-library/react'

import Footer from '../src/components/Footer/Footer'

describe('Footer', () => {
    it('renders correctly', () => {
        render(<Footer/>)

        expect(screen.getByText("© 2020 Kasa. All rights reserved")).toBeInTheDocument()
    })



})
