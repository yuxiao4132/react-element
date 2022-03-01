import React from 'react'
import { Wrapper } from './style'
import { NavBar } from 'antd-mobile'


class NavHeader extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Wrapper>
                <NavBar className='navbar' backArrow={false} onBack={this.props.back}  back={this.props.left}>
                    <div>
                        <p className='title'>{this.props.title}</p>
                    </div>
                    <div onClick={this.props.rightclick} className='right'>{this.props.right}</div>
                </NavBar>
            </Wrapper>
        )
    }
}
export default NavHeader