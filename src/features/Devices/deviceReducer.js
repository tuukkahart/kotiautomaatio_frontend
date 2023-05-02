import { createSlice } from '@reduxjs/toolkit'
import deviceService from '../../services/devices'

const deviceSlice = createSlice({
    name: 'devices',
    initialState: [],
    reducers: {
        
        appendDevice( state, action){
            const content = action.payload
            state.push({
                name: content,
                relay: false,
            })
        },

        switchRelay(state, action){
            const id = action.payload
            const deviceToSwitch = state.find(d => d._id === id)
            const changedDevice = {
                ...deviceToSwitch,
                relay: !deviceToSwitch.relay
            }

            return state.map(device =>
                device._id !== id ? device : changedDevice
            )
        },

        setDevices(state, action){
            return action.payload
        }
    }
})


export const {appendDevice, setDevices, switchRelay} = deviceSlice.actions

export const initializeDevices = () => {
    return async dispatch => {
        const devices = await deviceService.getAll()
        dispatch(setDevices(devices))
    }
}

export const createDevice = (content) => {
    return async dispatch => {
        const newDevice = await deviceService.createNew(content)
        dispatch(appendDevice(newDevice))
    }
}

export const toggleRelay = (id) => {
    return async dispatch => {
        const changedDevice = await deviceService.switchRelay(id)
        dispatch(switchRelay(changedDevice._id))
    }
}

export default deviceSlice.reducer