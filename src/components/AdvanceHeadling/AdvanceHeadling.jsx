import MainLayout from '@components/Layout/Layout';
import React from 'react';
import styles from './style.module.scss';

const AdvanceHeadling = () => {
    const { container } = styles;
    return (
        <MainLayout>
            <div className={container}>
                Test
            </div>
        </MainLayout>
    );
};

export default AdvanceHeadling;
