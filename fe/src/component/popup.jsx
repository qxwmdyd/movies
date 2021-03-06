import React from 'react'
import { Popup, Icon } from "antd-mobile"
import Util from "../util/Util"
const dayOfWeek = ['日', '一', '二', '三', '四', '五', '六']
function formate() {
    const now = new Date()
    const date = now.toLocaleString().split(' ')[0]
    const weekDay = '星期' + dayOfWeek[now.getDay()]
    return {
        date,
        weekDay
    }
}

export default class Pop extends React.Component {

    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        const d = formate()
        const { history } = this.props
        return < div className='popup' >
            <div className='showtime'>
                <span>{d.date}</span>
                <span className="weekDay">{d.weekDay}</span>
            </div>
            <div id='container'></div>

            <div className="editBtns">
                <span className="editBtns-item" onClick={() => {
                    Popup.hide();
                    history.push('/reptile')
                }}>
                    <Icon type={require('../common/svg/search.svg')} size="lg"></Icon>
                    <label className='name' >先找找</label>
                </span>
                <span className="editBtns-item" onClick={() => {
                    Util.Toast.info('暂不支持')
                }}>
                    <Icon type={require('../common/svg/upload.svg')} size="lg"></Icon>
                    <label className='name'>文件夹形式</label>
                </span>
            </div>
            <div className='popup-footer'>
                <Icon type={require('../common/svg/close.svg')} size="sm" style={{ position: 'relative', top: '5px' }} onClick={() => {
                    Popup.hide();
                }} />
            </div>
        </div >
    }

}

