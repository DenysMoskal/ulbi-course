import React, { Suspense, useEffect, useState } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';

function App() {
    const { theme } = useTheme();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <button onClick={() => setIsModalOpen(true)} type="button">
                    Open Modal
                </button>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloribus obcaecati voluptatem natus? Blanditiis nobis optio placeat voluptate, ad,
                eveniet,ipsa exercitationem earum soluta nostrum dicta quisquam consectetur. Eaque,
                provident inventore.
            </Modal>
        </div>
    );
}

export default App;
