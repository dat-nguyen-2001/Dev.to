import {atom} from 'recoil';

const email =

export const usernameState = atom<string | null>({
    key: 'userState',
    default: null
})

