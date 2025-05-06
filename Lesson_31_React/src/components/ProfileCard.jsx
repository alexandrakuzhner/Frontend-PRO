import ProfileStyles from "./ProfileCard.module.css"
import { useState } from "react"

// props = properties
// export default function ProfileCard(props) {
export default function ProfileCard({ username, email, phone }) {
  // создаем начальное состояние для значения
  // useState возвращает массив из 2 элементов
  // 1 элемент само значение
  // 2 элемент это функция которая меняет значение и говорит реакту чтобы тот перерисововал компонент
  // let userRateState = useState(0)
  // let userRate = userRateState[0]
  // let setUserRate = userRateState[1]
  let [userRate, setUserRate] = useState(0)


  const handleBtnClick = () => {
    // console.log(`Button clicked in profile card of ${username}`);
    
    setUserRate(++userRate)
    
  }

  const minusBtnClick = () => {
    setUserRate(--userRate)
  }
  

  return (
    <div className={ProfileStyles["profile-card"]}>
      <div className={ProfileStyles.media}>
        <img src="https://avatar.iran.liara.run/public/boy" alt="person" />
      </div>
      <div className="content">
        <p>{username || "John"}</p>
        <p>{email ? email : "john@gmail.com"}</p>
        <p>{phone}</p>
        <p>User rate: {userRate}</p>
        <button onClick={handleBtnClick}>Up rate</button>
        <button onClick={minusBtnClick}>Down Rate</button>
      </div>
    </div>
  )
}
