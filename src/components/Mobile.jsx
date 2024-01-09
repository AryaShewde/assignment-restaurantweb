import React from 'react'
import Navbar from './Navbar'
import Top from './Top'
import Filter from './Filter'

const Mobile = () => {
    return (
        <>
            <div className='mobiledev'>
                <Top />
                <Navbar />
                <Filter />
            </div>
        </>
    )
}

export default Mobile
