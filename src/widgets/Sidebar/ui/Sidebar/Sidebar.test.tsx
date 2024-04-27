import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('classNames', () => {
    test('Sidebar', () => {
        render(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar toggle', () => {
        render(<Sidebar />);
        const button = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        fireEvent.click(button);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');

        fireEvent.click(button);

        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
