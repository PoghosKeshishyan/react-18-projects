import { useEffect, useState } from "react";

const Countries = ({ reference }) => {
    const data = ['erevan', 'dilijan', 'vayots dzor', 'kapan', 'gyumri', 'aghveran'];
    const [display, setDisplay] = useState(false);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        window.addEventListener('click', windowHandler);
    }, [])

    const windowHandler = (e) => {
        if (!reference.current.contains(e.target)) setDisplay(false);
    }

    const handlerCity = (e) => {
        setInputValue(e.target.innerText);
        setDisplay(false);
    }

    return (
        <div className="Countries">
            <input 
              type="search" 
              value={inputValue} 
              placeholder="Where are you going?" 
              onClick={() => setDisplay(true)} 
              onChange={e => setInputValue(e.target.value)} 
            />

            {display && <div className="countriesContainer">
                {data.filter(el => el.includes(inputValue))
                    .map((el, index) => <p key={index} onClick={handlerCity}>{el}</p>
                )}
            </div>}
        </div>
    )
}

export default Countries;