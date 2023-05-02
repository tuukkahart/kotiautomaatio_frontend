import React from 'react'
import { useDispatch } from 'react-redux'
import { createDevice } from './deviceReducer'


const AddDevice = () => {

    const dispatch = useDispatch()

    const addDevice = async (event) => {
        event.preventDefault()
        const content = {
            name: event.target.device.value
        }
        event.target.device.value = ''
        dispatch(createDevice(content))
    }

  return (
    <form onSubmit={addDevice}>
        <input name='device'/>
        <button type='submit'>add</button>
    </form>
  )
}

export default AddDevice