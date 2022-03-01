import React from 'react'
import styled from 'styled-components'
import BScroll from 'better-scroll'
const container = document.querySelector('.container')
const Scroll = new BScroll(container, {
    scrollX: true,
    scrollY: true, 
    probeType:3,
})
export default class ScrollY extends React.Component {
    render() {
        return (
            <div className='container'>
              <div className='content'>
                  
              </div>
            </div>
        )
    }
}
