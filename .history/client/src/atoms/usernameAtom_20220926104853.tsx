import {atom} from 'recoil';

const username = sessionStorage.get

export const usernameState = atom<string | null>({
    key: 'userState',
    default: null
})

