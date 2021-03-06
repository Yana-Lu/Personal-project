import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { SaveResult } from '../../Firebase'
import { getBeHostEvents } from '../../Firebase'
import { Form, Button, Col } from 'react-bootstrap'
import Swal from 'sweetalert2'
import styles from './ResultForm.module.scss'
import { propTypes } from 'react-bootstrap/esm/Image'

export function ResultForm(props) {
  const [bottle, setBottle] = useState('0')
  const [bottleCap, setBottleCap] = useState('0')
  const [foodContainer, setFoodContainer] = useState('0')
  const [noFoodContainer, setNoFoodContainer] = useState('0')
  const [PlasticBag, setPlasticBag] = useState('0')
  const [foodPackage, setFoodPackage] = useState('0')
  const [straw, setStraw] = useState('0')
  const [drinkCup, setDrinkCup] = useState('0')
  const [tableware, setTableware] = useState('0')
  const [can, setCan] = useState('0')
  const [aluminumFoilBag, setAluminumFoilBag] = useState('0')
  const [glassBottle, setGlassBottle] = useState('0')
  const [fishingGear, setFishingGear] = useState('0')
  const [fishingTool, setFishingTool] = useState('0')
  const [fishingNet, setFishingNet] = useState('0')
  const [cigaretteButt, setCigaretteButt] = useState('0')
  const [toothbrush, setToothbrush] = useState('0')
  const [syringeneedle, setSyringeneedle] = useState('0')
  const [lighter, setLighter] = useState('0')
  const [metal, setMetal] = useState('0')
  const [hook, setHook] = useState('0')

  function resultChange(e) {
    if (e.target.id === 'result-bottle-input') {
      setBottle(e.target.value)
    } else if (e.target.id === 'result-bottleCap-input') {
      setBottleCap(e.target.value)
    } else if (e.target.id === 'result-foodContainer-input') {
      setFoodContainer(e.target.value)
    } else if (e.target.id === 'result-noFoodContainer-input') {
      setNoFoodContainer(e.target.value)
    } else if (e.target.id === 'result-PlasticBag-input') {
      setPlasticBag(e.target.value)
    } else if (e.target.id === 'result-foodPackage-input') {
      setFoodPackage(e.target.value)
    } else if (e.target.id === 'result-straw-input') {
      setStraw(e.target.value)
    } else if (e.target.id === 'result-drinkCup-input') {
      setDrinkCup(e.target.value)
    } else if (e.target.id === 'result-tableware-input') {
      setTableware(e.target.value)
    } else if (e.target.id === 'result-can-input') {
      setCan(e.target.value)
    } else if (e.target.id === 'result-aluminumFoilBag-input') {
      setAluminumFoilBag(e.target.value)
    } else if (e.target.id === 'result-glassBottle-input') {
      setGlassBottle(e.target.value)
    } else if (e.target.id === 'result-fishingGear-input') {
      setFishingGear(e.target.value)
    } else if (e.target.id === 'result-fishingTool-input') {
      setFishingTool(e.target.value)
    } else if (e.target.id === 'result-fishingNet-input') {
      setFishingNet(e.target.value)
    } else if (e.target.id === 'result-cigaretteButt-input') {
      setCigaretteButt(e.target.value)
    } else if (e.target.id === 'result-toothbrush-input') {
      setToothbrush(e.target.value)
    } else if (e.target.id === 'result-syringeneedle-input') {
      setSyringeneedle(e.target.value)
    } else if (e.target.id === 'result-lighter-input') {
      setLighter(e.target.value)
    } else if (e.target.id === 'result-metal-input') {
      setMetal(e.target.value)
    } else {
      setHook(e.target.value)
    }
  }

  function resultSubmit(e) {
    e.preventDefault()
    if (bottle === '') {
      setBottle('0')
    } else if (bottleCap === '') {
      setBottleCap('0')
    } else if (foodContainer === '') {
      setFoodContainer('0')
    } else if (noFoodContainer === '') {
      setNoFoodContainer('0')
    } else if (PlasticBag === '') {
      setPlasticBag('0')
    } else if (foodPackage === '') {
      setFoodPackage('0')
    } else if (straw === '') {
      setStraw('0')
    } else if (drinkCup === '') {
      setDrinkCup('0')
    } else if (tableware === '') {
      setTableware('0')
    } else if (can === '') {
      setCan('0')
    } else if (aluminumFoilBag === '') {
      setAluminumFoilBag('0')
    } else if (glassBottle === '') {
      setGlassBottle('0')
    } else if (fishingGear === '') {
      setFishingGear('0')
    } else if (fishingTool === '') {
      setFishingTool('0')
    } else if (fishingNet === '') {
      setFishingNet('0')
    } else if (cigaretteButt === '') {
      setCigaretteButt('0')
    } else if (toothbrush === '') {
      setToothbrush('0')
    } else if (syringeneedle === '') {
      setSyringeneedle('0')
    } else if (lighter === '') {
      setLighter('0')
    } else if (metal === '') {
      setMetal('0')
    } else if (hook === '') {
      setHook('0')
    } else {
      const obj = {
        eventId: props.eventId,
        bottle: bottle,
        bottleCap: bottleCap,
        foodContainer: foodContainer,
        noFoodContainer: noFoodContainer,
        PlasticBag: PlasticBag,
        foodPackage: foodPackage,
        straw: straw,
        drinkCup: drinkCup,
        tableware: tableware,
        can: can,
        aluminumFoilBag: aluminumFoilBag,
        glassBottle: glassBottle,
        fishingGear: fishingGear,
        fishingTool: fishingTool,
        fishingNet: fishingNet,
        cigaretteButt: cigaretteButt,
        toothbrush: toothbrush,
        syringeneedle: syringeneedle,
        lighter: lighter,
        metal: metal,
        hook: hook,
      }
      Swal.fire({
        title: '確定要上傳嗎？',
        showCancelButton: true,
        confirmButtonText: `確定`,
        cancelButtonText: `取消`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('上傳成功!', '', 'success')
          SaveResult(obj)
          getBeHostEvents(props.uid, props.setBeHostEvents, 'hihi')
          props.handleShowResultForm(false)
        }
      })
    }
  }
  return (
    <div className={`${styles.resultFormBG} ${props.showResultForm ? styles.showResultForm : ''}`}>
      <div className={styles.resultFormOut}>
        <Form className={styles.resultForm} onSubmit={resultSubmit}>
          <h3>填寫行動成果</h3>
          <p>請填寫個數，若無則填空(範例：5)</p>
          <Form.Row as={Col}>
            <Form.Group as={Col} controlId="result-bottle-input">
              <Form.Label>寶特瓶</Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="result-bottleCap-input">
              <Form.Label>塑膠瓶蓋</Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="result-foodContainer-input">
              <Form.Label>其他飲料瓶與食物容器</Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
          </Form.Row>
          <Form.Row as={Col}>
            <Form.Group as={Col} controlId="result-noFoodContainer-input">
              <Form.Label>非食物的瓶罐與容器</Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="result-PlasticBag-input">
              <Form.Label>塑膠提袋</Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="result-foodPackage-input">
              <Form.Label>食品包裝袋</Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
          </Form.Row>
          <Form.Row as={Col}>
            <Form.Group as={Col} controlId="result-straw-input">
              <Form.Label>吸管</Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="result-drinkCup-input">
              <Form.Label>外帶飲料杯</Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="result-tableware-input">
              <Form.Label>免洗餐具</Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
          </Form.Row>
          <Form.Row as={Col}>
            <Form.Group as={Col} controlId="result-can-input">
              <Form.Label>鐵鋁罐</Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="result-aluminumFoilBag-input">
              <Form.Label>鋁箔包或利樂包 </Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="result-glassBottle-input">
              <Form.Label>玻璃瓶</Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
          </Form.Row>
          <Form.Row as={Col}>
            <Form.Group as={Col} controlId="result-fishingGear-input">
              <Form.Label>釣魚用具</Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="result-fishingTool-input">
              <Form.Label>漁業浮球、浮筒、漁船防碰墊</Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="result-fishingNet-input">
              <Form.Label>漁網與繩子</Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
          </Form.Row>
          <Form.Row as={Col}>
            <Form.Group as={Col} controlId="result-cigaretteButt-input">
              <Form.Label>菸蒂</Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="result-toothbrush-input">
              <Form.Label>牙刷</Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="result-syringeneedle-input">
              <Form.Label>針筒、針頭</Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
          </Form.Row>
          <Form.Row as={Col}>
            <Form.Group as={Col} controlId="result-lighter-input">
              <Form.Label>打火機</Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="result-metal-input">
              <Form.Label>金屬製品</Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="result-hook-input">
              <Form.Label>魚鉤</Form.Label>
              <Form.Control type="text" onChange={resultChange} />
            </Form.Group>
          </Form.Row>
          <div className={styles.btns}>
            <Button variant="outline-success" type="submit">
              上傳成果
            </Button>
            <Button
              variant="default"
              onClick={() => {
                props.handleShowResultForm(false)
              }}
            >
              關閉
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

ResultForm.propTypes = {
  eventId: PropTypes.string,
  uid: PropTypes.string,
  setBeHostEvents: PropTypes.func,
  handleShowResultForm: PropTypes.func,
  showResultForm: propTypes.bool,
}
