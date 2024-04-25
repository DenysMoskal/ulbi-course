import { classNames } from './classNames';

describe('classNames', () => {
    test('With first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('With mode', () => {
        expect(classNames('someClass', { someMod: true })).toBe('someClass someMod');
    });

    test('With additional', () => {
        expect(classNames('someClass', {}, ['additionalClass'])).toBe('someClass additionalClass');
    });

    test('With mod false', () => {
        expect(classNames('someClass', { someMod: false })).toBe('someClass');
    });

    test('With mod undefined', () => {
        expect(classNames('someClass', { someMod: undefined })).toBe('someClass');
    });
});
