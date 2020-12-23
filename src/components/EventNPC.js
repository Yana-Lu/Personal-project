import React, { useEffect } from 'react'
import styles from '../scss/EventPage.module.scss'
import Jump from 'react-reveal/Fade'

//alert樣式
import Swal from 'sweetalert2'

export function EventNPC(props) {
  console.log(props)
  // console.log(props.uid)
  useEffect(() => {
    let mapContain = document.getElementById('mapContain')
    let ifBeHost = document.getElementById('ifBeHost')
    let eventStep1 = document.getElementById('eventStep1')
    let ifBeMember = document.getElementById('ifBeMember')
    let eventStep2 = document.getElementById('eventStep2')
    let eventInfo = document.getElementById('eventInfo')
    console.log(props.uid)
    function alert() {
      if (!props.uid) {
        console.log('1')
        Swal.fire({
          icon: 'warning',
          // title: '請先登入喔!',
          title: '1',
        })
      }
    }

    mapContain?.addEventListener('click', alert)

    ifBeHost?.addEventListener('click', () => {
      eventStep1.style.display = 'block'
    })
    ifBeMember?.addEventListener('click', () => {
      eventStep1.style.display = 'none'
    })
    ifBeMember?.addEventListener('click', () => {
      eventStep2.style.display = 'block'
      eventInfo.style.display = 'block'
    })
    ifBeHost?.addEventListener('click', () => {
      eventStep2.style.display = 'none'
      eventInfo.style.display = 'none'
    })
    return function cleanup() {
      mapContain.removeEventListener('click', alert)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.uid])
  return (
    <div className={styles.eventHostBG}>
      <div className={styles.eventHost}>
        <br />
        <div className={styles.ifBeHost} id="ifBeHost">
          <div className={styles.ifBeHostImg}></div>
          <h3 className={styles.ifBeHostText}>想要開團</h3>
        </div>
        <br />
        <Jump>
          <div className={styles.eventStep1} id="eventStep1">
            <h3>在地圖上點擊地點設立座標</h3>
            <br />
            <h3>點擊該座標</h3>
            <br />
            <h3>點擊"我要開團"</h3>
            <br />
            <h3>填好完整資料並點擊開團按鈕</h3>
            <br />
          </div>
        </Jump>
      </div>

      <div className={styles.eventJoin}>
        <br />
        <div className={styles.ifBeMember} id="ifBeMember">
          <div className={styles.ifBeMemberImg}></div>
          <h3 className={styles.ifBeMemberText}>想要跟團</h3>
        </div>
        <br />
        <Jump>
          <div className={styles.eventStep2} id="eventStep2">
            <h3>點擊地圖上想跟團的座標</h3>
            <br />
            <h3>點擊"我想跟團"</h3>
            <br />
            <h3>填好完整資料並點擊跟團按鈕</h3>
            <br />
          </div>
          <div className={styles.eventInfo} id="eventInfo">
            <p id="infoTitle">行動主題：</p>
            <p id="infoHost">開團人：</p>
            <p id="infoEmail">開團人信箱：</p>
            <p id="infoStartDate">活動日期：</p>
            <p id="infoTime">活動時間：</p>
            <p id="memberLimit">人數上限：</p>
            <p id="memberNum">目前人數：</p>
          </div>
        </Jump>
      </div>
    </div>
  )
}
