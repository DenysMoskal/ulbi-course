import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('classNames', () => {
    test('Button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('With only first param', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
