import React from 'react';
import '../styles/Header.css';
import logoIcon from '../assets/clipboard-list.svg';
import searchIcon from '../assets/search.svg';

interface HeaderProps {
    onSearch?: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__brand">
                    <img src={logoIcon} alt="Логотип" className="header__logo" />
                    <h1 className="header__title">
                        Сервис подготовки и<br />разметки биометрических данных
                    </h1>
                </div>

                <div className="header__search-wrapper">
                    <img src={searchIcon} alt="" className="header__search-icon" aria-hidden="true" />
                    <input
                        type="text"
                        className="header__search-input"
                        placeholder="Поиск"
                        onChange={(e) => onSearch?.(e.target.value)}
                    />
                </div>
            </div>
        </header>
    );
};