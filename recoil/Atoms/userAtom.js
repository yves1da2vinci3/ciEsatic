import {atom} from 'recoil'
import Cookies  from 'js-cookie'
let userInfo = Cookies.get('userInfo')
const userAtom = atom({
    key: 'userInfo', 
    default: userInfo ? JSON.parse(Cookies.get('userInfo')) : {}
})

export default userAtom

