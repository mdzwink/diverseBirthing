const BackToTop = () => {
  const handleTopClick = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return (
    <div className='back-to-top' onClick={() => handleTopClick()} >Back<br/>To<br/>Top</div>
  )
}

export default BackToTop;