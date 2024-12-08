import React from 'react'
import Herosection from './Components/Herosection'
import styled from 'styled-components'
import AboutMe from './Components/AboutMe'

function Home() {
  return (
    
    <div>
      <Wraper>
      <Herosection/>
      <div >
          <img className="wave" src="src\assets\wave2.svg" alt="" />
        </div>
      </Wraper>
      {/* <AboutMe/> */}
    </div>
  )
}
const Wraper=styled.section`
.wave{
    position: relative;
bottom: 10px;
    }
`
export default Home