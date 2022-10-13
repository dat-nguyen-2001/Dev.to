import {atom} from 'recoil'

export const usernameState = atom<string | null>({
    key: 'userState',
    default: null
})

