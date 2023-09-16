import React from 'react'
import Button from '../Button/Button'

const Counter = () => {
    const handleOnClick = (evtType) => {
        if (evtType === "ADD") {
            console.log("add button click")
            return
        }
        console.log("remove button click")
    }
    return (
        <>
            <span>Counter: { }</span>
            <Button
                onClick={handleOnClick}
                label="+"
                backgroundColor={"green"}
                size={"lg"}
            />
            <Button
                onClick={handleOnClick}
                label="-"
                backgroundColor={"red"}
                size={"lg"}
            />
        </>
    )
}

export default Counter