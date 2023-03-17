import React, { useEffect } from 'react'
import { Socket } from 'socket.io-client'
import Spinner from '../components/Spinner'
import { socket } from '../socket/socket'

export default function SingUp(): JSX.Element {

    useEffect(() => {
        socket.emit('spinner', "asdkfgaisd")
    }, [])


    return (
        <div>
            <Spinner />
            afakdfakjgdfkajsdb
        </div>
    )
}
