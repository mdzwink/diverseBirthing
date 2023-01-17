import React, { useEffect, useState } from 'react'
const BackToTop = () => {
  const [active, setActive] = useState(false)
  
  const checkScroll = () => {
    const sY = window.scrollY;
    return sY > 30 ? setActive(true) : setActive(false);
  }
  window.addEventListener('scroll', checkScroll)

  const handleTopClick = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return (
    <>
        <div className={active ? 'back-to-top active' : 'back-to-top'} onClick={() => handleTopClick()} >Back<br/>To<br/>Top</div>
    </>
  )
}

export default BackToTop;