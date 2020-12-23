import React from 'react'
import { ResultForm } from './ResultForm'
import { Result } from './Result'
//scss
import styles from '../scss/ProfilePage.module.scss'
import { Button } from 'react-bootstrap'
export function StatusAndBtn(props) {
  console.log(props)
  // const [showResult, setShowResult] = useState(false)
  function showResultPopUp() {
    let resultPopup = document.getElementById('result')
    resultPopup.style.display = 'block'
  }
  function showResultForm() {
    let closePopup = document.getElementById('resultForm')
    closePopup.style.display = 'block'
  }
  if (props.status === 'true' && props.eventData.member_limit > props.eventData.members.length) {
    return (
      <div>
        <p className={styles.eventStatus}>行動狀態：開放報名中</p>
      </div>
    )
  } else if (props.status === 'true' && props.eventData.member_limit <= props.eventData.members.length) {
    return (
      <div>
        <p className={styles.eventStatus}>行動狀態：報名人數已額滿</p>
      </div>
    )
  } else if (props.status === 'false' && props.eventData.hostId === props.uid) {
    return (
      <div>
        <p className={styles.eventStatus}>行動狀態：行動已執行，待成果上傳</p>
        <div className={styles.eventStatusBtns}>
          <Button
            variant="outline-primary"
            className={styles.eventStatusBtn}
            id="uploadResultBtn"
            onClick={showResultForm}
          >
            上傳行動成果
          </Button>
          <ResultForm uid={props.uid} eventId={props.eventData.eventId} />
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <p className={styles.eventStatus}>行動狀態：已完成</p>
        <div className={styles.eventStatusBtns}>
          <Button
            variant="outline-success"
            className={styles.eventStatusBtn}
            id="showResultBtn"
            onClick={showResultPopUp}
          >
            看行動成果
          </Button>
          <Result uid={props.uid} eventId={props.eventData.eventId} eventData={props.eventData} />
        </div>
      </div>
    )
  }
}
