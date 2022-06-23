import React, {SyntheticEvent, useContext, useState} from "react";
import {Btn} from "../common/Btn";
import {SearchContext} from "../../contexts/search.context";

import './Header.css';
import {HomePage} from "../common/HomePage";

export const Header = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputVal, setInputVal] = useState(search);

    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    }

    return (
        <header>
            <HomePage to="/" text="Mega Ogłoszenia"/>
            <Btn to="/add" text="Dodaj ogłoszenie"/>
            <form className="search" onSubmit={setSearchFromLocalState}>
                <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
                <Btn text="Szukaj"/>
            </form>
        </header>
    );

};
