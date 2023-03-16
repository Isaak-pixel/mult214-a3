import './App.css';
import React, { useState } from 'react';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h2>Very Cool Recipes</h2>
      </header>

      <h1>Trending Recipes</h1>

      <div className="recipe">
      <img src="https://placekitten.com/400/250" alt="placeholder image" />
        <h2>Recipe Name Number 1</h2>
        <h3>Recipe Subtitle Number 1</h3>
        <h4>Recipe Description. This will be a sectence or two long, and describe what the dish is like in more details.</h4>
        <p>Prep Time: <strong>45mins</strong></p>
        <p class="rating">&#9733; &#9733; &#9733; &#9733; &#9734; <span class="ratingNum">(123)</span></p>
      </div>

      <div className="recipe">
        <h2>Recipe Name Number 2</h2>
        <h3>Recipe Subtitle Number 2</h3>
        <p>Prep Time: <strong>45mins</strong></p>
      </div>

      <div className="recipe">
        <h2>Recipe Name Number 3</h2>
        <h3>Recipe Subtitle Number 3</h3>
        <p>Prep Time: <strong>45mins</strong></p>
      </div>

      <div className="news">
        <h1>Recipe News</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae faucibus urna. Praesent id lobortis ante.
        Integer auctor leo nisl. Vestibulum quis rutrum eros. Vivamus scelerisque sed sapien sed efficitur. Nam a tortor
        et enim tincidunt hendrerit. Mauris sed semper est, in finibus felis. Vestibulum vel interdum ex, ut convallis
        lacus. Duis finibus ligula odio, in pulvinar nisi mollis blandit. Aenean sagittis a ex at mattis.
        Vestibulum bibendum purus efficitur, finibus purus a, ultrices lorem. Aenean consectetur scelerisque enim nec
        convallis. Aenean magna purus, pharetra sed ornare sed, rhoncus vitae quam. Ut efficitur est eu nisl euismod
        dictum. Nunc interdum lacus vel faucibus viverra. Phasellus in gravida velit, fermentum egestas nulla. Aliquam
        sem libero, pulvinar eget leo sit amet, rhoncus consequat velit. Curabitur pharetra mi orci, at interdum nulla
        scelerisque laoreet. Fusce non tincidunt diam.
        Phasellus bibendum sagittis accumsan. Mauris mollis augue ut mauris eleifend, in consectetur sapien interdum.
        Fusce tincidunt maximus sodales. Curabitur suscipit diam a justo tincidunt dapibus. Morbi a cursus risus. Nulla
        et magna tortor. Sed mi ipsum, pretium vel nulla eget, volutpat placerat erat.

        Pellentesque convallis laoreet justo. Proin mauris lectus, mattis at sem non, tempus eleifend enim. Donec accumsan
        aliquet lectus posuere lobortis. Donec at augue ac nulla molestie imperdiet dignissim at leo. Proin ante odio,
        condimentum a risus ac, hendrerit consequat lacus. Donec nec nisl quis mauris varius bibendum. Ut scelerisque in leo id
        vestibulum. Nunc augue orci, accumsan et elit ac, efficitur cursus urna. Nunc eget condimentum felis. Suspendisse tempor
        nec magna nec pellentesque. Donec rhoncus nisi eget dapibus tincidunt. Vestibulum dignissim ligula sit amet arcu vulputate,
        in interdum neque ornare. Proin volutpat molestie dapibus. In ultrices, diam id lacinia mollis, lacus neque mattis diam,
        non sagittis metus dolor eu purus.</p>
      </div>

      <h1>List of Recipes</h1>

      <h1>Saved Recipes</h1>
    </div>
  );
}

export default App;
