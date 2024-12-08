import React from 'react'
import PortHeader from './Components/PortHeader'
import Work from './Components/Work'
import styled from 'styled-components'

function PortFollio() {
  return (
    <div>
      <Wraper>
      <PortHeader/>
      <Work/>
      <img className='svg' src="src\assets\wave.svg" alt="" />
      </Wraper>
    </div>
  )
}
const Wraper =styled.section`
position: relative;
bottom: -8px;
`
export default PortFollio