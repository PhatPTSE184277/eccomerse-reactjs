import { dataInfo } from '@components/Info/constants';
import InfoCard from '@components/Info/InfoCard/InfoCard';
import MainLayout from '@components/Layout/Layout';
import React from 'react';
import styles from './style.module.scss';

const Info = () => {
    const { container } = styles;
    return (
        <MainLayout>
            <div className={container}>
                {dataInfo.map((item) => {
                    return (
                        <InfoCard
                            content={item.title}
                            description={item.decription}
                            src={item.src}
                        />
                    );
                })}
            </div>
        </MainLayout>
    );
};

export default Info;
