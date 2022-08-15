import React, { useState } from 'react';
import List from './Components/List/List'
import data from './data/data';

export default function App() {
    const [list, setList] = useState(data);

    return (
        <List list={list} />
    );
}