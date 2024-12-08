import React from 'react'
import ContactInfo from './Components/ContactInfo'
import styled from 'styled-components'
import ContHeader from './Components/ContHeader'

function Contact() {
  return (
    <div>
      <Wraper>
      {/* <img className='svg' src="src\assets\wave.svg" alt="" /> */}
      </Wraper>
      <ContHeader/>
      <ContactInfo/>
    </div>
  )
}
const Wraper=styled.section`
position: relative;
bottom: -8px;
`
export default Contact