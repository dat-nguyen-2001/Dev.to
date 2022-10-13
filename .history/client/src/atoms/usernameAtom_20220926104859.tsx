import {atom} from 'recoil';

const username = sessionStorage.getItem('username')

export const usernameState = atom<string | null>({
    key: 'userState',
    default: null
})

