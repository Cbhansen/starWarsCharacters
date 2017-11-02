import React, { Component } from 'react';
import CharInfo from './CharInfo.jsx';

const List = ({people}) => {
    return (
        <div className="list">
            {
                people.map((p) => {
                    console.log(p)
                    return (
                        <div key={p.url}>
                            <h1 className="charName">{p.name}</h1>
                            <CharInfo charInfo={p}/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default List;