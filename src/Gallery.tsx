import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
    //let index = 0;
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    let l=sculptureList.length;
    function handleClickedNext() {
        setIndex(index + 1);
    }

    function handleClickedPrev(){
        setIndex(index - 1);
    }
    function handleShowClicked(){
        setShowMore(!showMore);
    }
    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleClickedNext} disabled={index===l-1}>
                Next
            </button>
            <button onClick={handleClickedPrev} disabled={index===0}>
                Previous
            </button>

            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <button onClick={handleShowClicked}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            {/*<p>
                {sculpture.description}
            </p>*/}
        </>
    );
}
