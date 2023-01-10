const LanguageSelection = (props) => {

  const { setLanguage, setLanguagePage } = props;

  const handleLanguageClick = (selectedLanguage) => {
    // set language state to 'selectedLanguage'
    setLanguage(selectedLanguage);
    setLanguagePage(false);
  }

  return (
    <section className="language-selection">
        {/* <div className="intro-animation"></div> */}
        <div onClick={() => handleLanguageClick('english')} ><h1>I speak <strong>English</strong></h1></div>
        <div onClick={() => handleLanguageClick('french')} ><h1>je parle <strong>français</strong></h1></div>
        <div onClick={() => handleLanguageClick('urdu')}><h1>میں اردو بولتا ہوں۔</h1></div>
        <div onClick={() => handleLanguageClick('portugese')}><h1>eu falo <strong>português</strong></h1></div>
        <div onClick={() => handleLanguageClick('spanish')}><h1>yo hablo <strong>español</strong></h1></div>
        <div onClick={() => handleLanguageClick('somali')}><h1>waxaan ku hadlaa <strong>somali</strong></h1></div>
        <div onClick={() => handleLanguageClick('ukrainian')}><h1>розмовляю <strong>українською</strong></h1></div>
        <div onClick={() => handleLanguageClick('russian')}><h1>я говорю на <strong>русском</strong></h1></div>
    </section>
  )
}

export default LanguageSelection;