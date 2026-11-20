import React from 'react';
import { Header } from '../components/Header';
import '../styles/HomePage.css';

export const HomePage: React.FC = () => {
    return (
        <div className="home-page-layout">
            <Header onSearch={(val) => console.log('Поиск:', val)} />

            <main className="home-page">
                <div className="home-page__container">
                </div>
            </main>
        </div>
    );
};

export default HomePage;