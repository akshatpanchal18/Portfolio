import React from 'react'
import ServiceA from './Components/ServiceA'
import ServiceB from './Components/Serviceb'
import ServiceC from './Components/ServiceC'
import ServiceHeader from './Components/ServiceHeader'
import styled from 'styled-components'

function Services() {
  return (
    <>
    <div>
      <ServiceHeader/>
        <ServiceA/>
        <ServiceB/>
        <ServiceC/>
        <Wraper>
        <img className="svg" src="src\assets\wave.svg" alt="" />
        </Wraper>
    </div>
    </>
  )
}
const Wraper=styled.section`
position: relative;
bottom: -8px;
  
`
export default Services