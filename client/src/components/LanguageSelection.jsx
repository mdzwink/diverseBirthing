const LanguageSelection = (props) => {

  const { setLanguage, setLanguageSelector } = props;

  const handleLanguageClick = (selectedLanguage) => {
    // set language state to 'selectedLanguage'
    setLanguage(selectedLanguage);
    console.log('language selected', selectedLanguage);
    setLanguageSelector(false);
  }

  return (
    <section className="language-selection">
        <div onClick={() => handleLanguageClick('english')} ><h1>I speak English</h1></div>
        <div onClick={() => handleLanguageClick('urdu')}><h1>میں اردو بولتا ہوں۔</h1></div>
        <div onClick={() => handleLanguageClick('portugese')}><h1>eu falo português</h1></div>
        <div onClick={() => handleLanguageClick('spanish')}><h1>yo hablo español</h1></div>
        <div onClick={() => handleLanguageClick('somali')}><h1>waxaan ku hadlaa somali</h1></div>
        <div onClick={() => handleLanguageClick('ukrainian')}><h1>розмовляю українською</h1></div>
        <div onClick={() => handleLanguageClick('russian')}><h1>я говорю на русском</h1></div>
    </section>
  )
}

export default LanguageSelection;