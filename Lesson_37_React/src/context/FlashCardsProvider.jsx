import { createContext, useState } from 'react'

export const FlashCardsContext = createContext()

export function FlashCardsProvider({ children }) {
  const [flashcards, setFlashcards] = useState([
    {
      id: 1,
      question: 'Привет',
      answer: 'Hello',
      isDone: false
    },
    {
      id: 2,
      question: 'Дом',
      answer: 'House',
      isDone: false
    },
    {
      id: 3,
      question: 'Бумага',
      answer: 'Paper',
      isDone: false
    },
    {
      id: 4,
      question: 'Еда',
      answer: 'Food',
      isDone: false
    },
    {
      id: 5,
      question: 'Воздух',
      answer: 'Air',
      isDone: false
    }
  ])

  const addFlashCard = ({ question, answer }) => {
    const newFlashCard = {
      id: Date.now(),
      question: question,
      answer: answer,
      isDone: false
    }

    setFlashcards([
      ...flashcards,
      newFlashCard
    ])
  }

  const toggleIsDone = (id) => {
    const newFlashCards = flashcards.map((flashcard) => {
      if (flashcard.id === id) {
        flashcard.isDone = !flashcard.isDone
        return flashcard
      }
      return flashcard
    })

    setFlashcards(newFlashCards)
  }

  return (
    <FlashCardsContext.Provider value={{
      flashcards, setFlashcards, addFlashCard, toggleIsDone
    }}>
      {children}
    </FlashCardsContext.Provider>
  )
}
