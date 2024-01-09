import React, { useState } from 'react'
import { HiOutlineFilter } from "react-icons/hi";
import { IoIosArrowRoundDown } from "react-icons/io";
import resta from "../assets/resta.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { CiClock2 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiMap } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

const Filter = () => {
    const [isBackVisible, setIsBackVisible] = useState(false);

    const toggleVisibility2 = () => {
        setIsBackVisible(!isBackVisible);
    };
    return (
        <div>
            <div className='filter'>
                <div className='filtertleft'>
                    <HiOutlineFilter className='filicon' />
                    <p>Filter By</p>
                </div>
                <div className='filterright'><IoIosArrowRoundDown className={`arrow arrow ${isBackVisible ? 'up' : 'down'}`} onClick={toggleVisibility2} /></div>
                {/* {isBackVisible && (
                    <div className={`righttop1 ${isBackVisible ? 'down3' : 'up3'}`}>
                         Hn
                    </div>
                )} */}
            </div>
            {isBackVisible && (
                <div className={`filterdrop ${isBackVisible ? 'down3' : 'up3'}`}>
                    <p>Low to High (Price) </p>
                    <hr />
                    <p>High to Low (Price) </p>
                    <hr />
                    <p>Low to High (Popularity) </p>
                    <hr />
                    <p>High to Low (Popularity) </p>
                </div>
            )}
            <div className={`filtercompo ${isBackVisible ? 'marfiltop' : 'marfildown'}`}>
                <p className='moretit'>RESTAUREN TO <span className='wordcol'>EXPLORE</span></p>
                <div className='coll'>
                    <div className='singlecoll'>
                        <img src={resta} alt="" />
                        <div className='extraonimg'>
                            <div className='dot'></div>
                            <FaRegHeart className='heary'/>
                        </div>
                        <div className='dataleft'>
                            <div className='hambu'>
                                <div>Dawat</div>
                                <GiHamburgerMenu className='humburger'/>
                            </div>
                            <div><CiClock2/> 30 min</div>
                            <div className='line'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minima.</div>
                            <div><CiStar/> 4.1 <CiMap/> 1.8km</div>
                        </div>
                    </div>
                    <div className='singlecoll'>
                        <img src={resta} alt="" />
                        <div className='extraonimg'>
                            <div className='dot'></div>
                            <FaRegHeart className='heary'/>
                        </div>
                        <div className='dataleft'>
                            <div className='hambu'>
                                <div>Dawat</div>
                                <GiHamburgerMenu className='humburger'/>
                            </div>
                            <div><CiClock2/> 30 min</div>
                            <div className='line'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minima.</div>
                            <div><CiStar/> 4.1 <CiMap/> 1.8km</div>
                        </div>
                    </div>
                    <div className='singlecoll'>
                        <img src={resta} alt="" />
                        <div className='extraonimg'>
                            <div className='dot'></div>
                            <FaRegHeart className='heary'/>
                        </div>
                        <div className='dataleft'>
                            <div className='hambu'>
                                <div>Dawat</div>
                                <GiHamburgerMenu className='humburger'/>
                            </div>
                            <div><CiClock2/> 30 min</div>
                            <div className='line'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minima.</div>
                            <div><CiStar/> 4.1 <CiMap/> 1.8km</div>
                        </div>
                    </div>
                    <div className='singlecoll'>
                        <img src={resta} alt="" />
                        <div className='extraonimg'>
                            <div className='dot'></div>
                            <FaRegHeart className='heary'/>
                        </div>
                        <div className='dataleft'>
                            <div className='hambu'>
                                <div>Dawat</div>
                                <GiHamburgerMenu className='humburger'/>
                            </div>
                            <div><CiClock2/> 30 min</div>
                            <div className='line'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minima.</div>
                            <div><CiStar/> 4.1 <CiMap/> 1.8km</div>
                        </div>
                    </div>
                    <div className='singlecoll'>
                        <img src={resta} alt="" />
                        <div className='extraonimg'>
                            <div className='dot'></div>
                            <FaRegHeart className='heary'/>
                        </div>
                        <div className='dataleft'>
                            <div className='hambu'>
                                <div>Dawat</div>
                                <GiHamburgerMenu className='humburger'/>
                            </div>
                            <div><CiClock2/> 30 min</div>
                            <div className='line'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minima.</div>
                            <div><CiStar/> 4.1 <CiMap/> 1.8km</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter
