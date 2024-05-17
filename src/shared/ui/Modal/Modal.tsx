import { classNames } from 'shared/lib/classNames/classNames';
import { FC, MouseEvent } from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        isOpen = false,
        children,
        onClose,
    } = props;

    const mods = {
        [cls.open]: isOpen,
    };

    const closeHandler = () => {
        if (onClose) onClose();
    };

    const onContentClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={closeHandler}>
                <div className={cls.content} onClick={onContentClick}>{children}</div>
            </div>
        </div>
    );
};
