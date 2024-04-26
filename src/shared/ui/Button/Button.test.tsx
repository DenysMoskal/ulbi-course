import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('classNames', () => {
    test('With first param', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
