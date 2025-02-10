import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './style.module.scss';
import React from 'react';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';

const HomePage = () => {
  const { container } = styles;
    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info/>
                <AdvanceHeadling/>
            </div>
        </div>
    );
};

export default HomePage;
