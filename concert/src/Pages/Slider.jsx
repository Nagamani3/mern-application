import React from 'react'
import Last_slider from '../sliders/Last_slider'
import Mid_slider from '../sliders/Mid_slider'
import Top_slider from '../sliders/Top_slider'


const Slider = () => {
    console.log("hii")
  return (
    <main className='slider_block'>
      <Top_slider />
      <Mid_slider />
      <Last_slider/>
    </main>
  )
}

export default Slider