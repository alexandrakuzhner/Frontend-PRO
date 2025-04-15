import { useEffect, useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0);
  const [randomRecipeId, setRandomRecipeId] = useState(1);
  const handleClick = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <button onClick={() => handleClick()}>
        count is {count}
      </button>
      <GreetUser username="" />
      <button
      onClick={() => {
        setRandomRecipeId(Math.floor(Math.random() * 100) + 1)
      }}
      style={{ marginBottom: 10 }}>Get random recipe</button>
      <RecipeCard recipeId={randomRecipeId} />

    </>
  )
}

function GreetUser({ username }) {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    if (username) {
      setGreeting(`Hello ${username}`)
    }

    return () => {
      setGreeting('')
    }
  }, [username])

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  )
}

function RecipeCard({ recipeId }) {
  // 1 после получения ответа от сервера обновить состояние recipe
  // 2 отобразить данные на карточке
  // 3 Добавить лоадер (текст идет заргузка рецепта)
  // 4 Добавить обработку ошибок и отобразить на страницу

  useEffect(() => {
    const controller = new AbortController()

    fetch(`https://dummyjson.com/recipes/${recipeId}`, {
      signal: controller.signal,
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

    return () => {
      controller.abort()
    }
  }, [recipeId])

  return (
    <>
      <div className='recipe-card'>
        <div className='recipe-card__image'>
          <img src="https://cdn.dummyjson.com/recipe-images/1.webp" alt="recipe" />
        </div>
        <div className='recipe-card__content'>
          <h3 className='recipe-card__title'>Recipe Title</h3>
          <p className='recipe-card__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
      </div>
    </>
  )
}

export default App
