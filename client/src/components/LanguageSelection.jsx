const LanguageSelection = (props) => {

  const { setLanguage, setLanguageSelector } = props;

  const handleLanguageClick = (languageSelected) => {
    //set language state to 'languageSelected'
    // console.log(languageSelected)
    // setLanguage(languageSelected);
    // console.log(languageSelected)
    // console.log('language selected', languageSelected);
    setLanguageSelector(false);
  }

  return (
    <section className="language-selection">
        <div onClick={() => handleLanguageClick('english')} ><h1>I speak English</h1></div>
        <div onClick={() => handleLanguageClick('urdu')}><h1>... Urdu</h1></div>
        <div onClick={() => handleLanguageClick('portugese')}><h1>... Portugese</h1></div>
        <div onClick={() => handleLanguageClick('spanish')}><h1>... Spanish</h1></div>
    </section>
  )
}

export default LanguageSelection;