import React from 'react'
import CardC from './CardC'


const Affichearticlescard = ({ articles }) => {
    return (
        <div className='container'>
            <div
                style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "left" }}>
                {articles.map((art, index) =>
                    <CardC art={art} />
                )}
            </div >
        </div>
    )
}



export default Affichearticlescard