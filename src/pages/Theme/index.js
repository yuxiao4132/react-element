import React from 'react'
import TabBar from '../../components/TabBar';
import { withRouter } from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
const mapStateToProps = state => ({
    cityinfo: state.cityinfo
})
class Theme extends React.Component {
    render() {
        return(
            // <Router>
            <div className="theme">
                {/* 渲染子路由 */}
                {renderRoutes(this.props.route.routes)}
                {/* TabBar组件  */}
                <TabBar cityinfo={this.props.cityinfo}></TabBar>
            </div>
            // </Router>
        )
    }
}
export default connect(mapStateToProps)(Theme);