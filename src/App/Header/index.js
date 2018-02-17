import React from 'react'
import homeImg from '../../../assets/home.png'
import toto from './style.css'

export default () => (
  <header className={toto.main_header}>
    <img style={{ height: 110 }} src={homeImg} />
    <h1>Hello world !</h1>
  </header>
)
