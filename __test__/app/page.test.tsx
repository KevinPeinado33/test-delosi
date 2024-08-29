import { render, screen } from '@testing-library/react';

import Home from '@/app/page';


describe('Matrix HomePage: page', () => {

    it('Validar que el titulo se muestre.', () => {

        render(<Home />);

        expect(screen.getByText('Girar matriz 90° en sentido antihorario')).toBeInTheDocument();

    });

});
