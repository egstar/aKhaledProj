import React from 'react'
import './notFound.css'

export default function Notfound() {
    return (
        <>
           <div className='body-not-found'>
                <div class="mars"></div>
                <img src="https://assets.codepen.io/1538474/404.svg" class="logo-404" />
                <img src="https://assets.codepen.io/1538474/meteor.svg" class="meteor" />
                <p class="title">Oh no!!</p>
                <p class="subtitle">
                    You’re either misspelling the URL <br /> or requesting a page that's no longer here.
                </p>
                <div align="center">
                    <a class="btn-back" href="#">Back to previous page</a>
                </div>
                <img src="https://assets.codepen.io/1538474/astronaut.svg" class="astronaut" />
                <img src="https://assets.codepen.io/1538474/spaceship.svg" class="spaceship" />
           </div>
        </>
    )
}