import React, { useEffect, useState } from 'react';
import { SlLocationPin } from "react-icons/sl";
import { IoIosArrowRoundDown } from "react-icons/io";
import { HiLanguage } from "react-icons/hi2";
import { HiOutlineBell } from "react-icons/hi2";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import slider1 from "../assets/sliders1.png"
import slider2 from "../assets/sliders2.png"
import slider3 from "../assets/sliders3.png"
import icons1 from "../assets/icons1.png"
import icons2 from "../assets/icons2.png"
import icons3 from "../assets/icons3.png"
import icons4 from "../assets/icons4.png"


const Top = () => {
    const [isFrontVisible, setIsFrontVisible] = useState(false);
    const [isBackVisible, setIsBackVisible] = useState(false);
    const [currentComponent, setCurrentComponent] = useState(1);
    const [currentComponent1, setCurrentComponent1] = useState(1);

    const toggleVisibility = () => {
        setIsFrontVisible(!isFrontVisible);
    };

    const toggleVisibility2 = () => {
        setIsBackVisible(!isBackVisible);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentComponent((prevComponent) => (prevComponent % 3) + 1);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);
    useEffect(() => {
        const intervalId1 = setInterval(() => {
            setCurrentComponent1((prevComponent) => (prevComponent % 2) + 1);
        }, 2000);

        return () => clearInterval(intervalId1);
    }, []);
    return (
        <div>
            <div className='nottop'>
                <div className='lefttop'>
                    <SlLocationPin className='loc' />
                    <p>Patna</p>
                </div>
                <div className='righttop'>
                    <div className='dropdown'>
                        <div className='righttop1'>
                            <HiLanguage /> En <IoIosArrowRoundDown className={`drop arrow ${isBackVisible ? 'up' : 'down'}`} onClick={toggleVisibility2} />
                        </div>
                        {isBackVisible && (
                            <div className={`righttop1 ${isBackVisible ? 'down2' : 'up2'}`}>
                                <HiLanguage /> Hn
                            </div>
                        )}
                    </div>
                    <div className='righttop2' onClick={toggleVisibility}>
                        {isFrontVisible ? <HiOutlineBellAlert className='bell2' /> : <HiOutlineBell className='bell1' />}
                    </div>
                </div>
            </div>
            <div className={`component component${currentComponent} visible`}>
                {currentComponent === 1 && <div className='search'><p>chicken tikka masala</p> <IoMdSearch className='searchicon' /></div>}
                {currentComponent === 2 && <div className='search'><p>samosa chaat</p> <IoMdSearch className='searchicon' /></div>}
                {currentComponent === 3 && <div className='search'><p>masala dosa</p> <IoMdSearch className='searchicon' /></div>}
            </div>
            <div className={`component component${currentComponent} visible`}>
                {currentComponent === 1 && <div><img className='slider1' src={slider1} alt="" /></div>}
                {currentComponent === 2 && <div><img className='slider1' src={slider2} alt="" /></div>}
                {currentComponent === 3 && <div><img className='slider1' src={slider3} alt="" /></div>}
            </div>
            <div className={`component component${currentComponent} visible`}>
                {currentComponent === 1 && <div className='dots'><div className='dot1'></div><div className='dot2'></div><div className='dot3'></div></div>}
                {currentComponent === 2 && <div className='dots'><div className='dot2'></div><div className='dot1'></div><div className='dot3'></div></div>}
                {currentComponent === 3 && <div className='dots'><div className='dot2'></div><div className='dot3'></div><div className='dot1'></div></div>}
            </div>
            <div className='threeimg'>
                <img className='smimg' src={icons1} alt="" />
                <img className='smimg' src={icons2} alt="" />
                <img className='smimg' src={icons3} alt="" />
            </div>
            <div className={`component component${currentComponent1} visible`}>
                {currentComponent1 === 1 && <div className='dashdiv'><div className='dash'></div><img src={icons4} alt="" /><p>40% off on order above Rs. 600</p></div>}
                {currentComponent1 === 2 && <div className='dashdiv'><div className='dash'></div><img src={icons4} alt="" /><p>60% off on order above Rs. 1200</p></div>}
            </div>
        </div>
    )
}

export default Top
