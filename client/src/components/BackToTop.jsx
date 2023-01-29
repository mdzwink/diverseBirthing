import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const BackToTop = () => {
  const [active, setActive] = useState(false)
  
  const checkScroll = () => {
    const sY = window.scrollY;
    const wH = window.innerHeight;
    return sY > wH / 2 ? setActive(true) : setActive(false);
  }

  window.addEventListener('scroll', checkScroll)

  const handleTopClick = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return (
    <>
        <div className={active ? 'back-to-top active' : 'back-to-top'} onClick={() => handleTopClick()} ><div className='top-arrow'><FontAwesomeIcon icon={faArrowUp} /></div></div>
    </>
  )
}

export default BackToTop;