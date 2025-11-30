import { useEffect, useState } from "react";

const Passengers = ({reference}) => {
    const [adult, setAdult] = useState(1);
    const [children, setChildren] = useState([]);
    const [room, setRoom] = useState(1);
    const [display, setDisplay] = useState(false);
    const i = 1;

    useEffect(() => {
        window.addEventListener('click', windowHandler);
    }, [])

    const windowHandler = (e) => {
        if (!reference.current.contains(e.target)) setDisplay(false);
    }

    const handlerAdult = (e) => {
        if (e.target.innerText == '+') {
            setAdult(prev => prev + 1);
        } else {
            if (adult == 1) return;
            setAdult(prev => prev - 1);
        }
    }

    const handlerChilder = (e) => {
        if (e.target.innerText == '+') {
            setChildren([...children, i]);
        } else {
            if (children == 0) return;
            const newCildren = [...children];
            newCildren.pop();
            setChildren(newCildren);
        }
    }

    const handlerRoom = (e) => {
        if (e.target.innerText == '+') {
            setRoom(prev => prev + 1);
        } else {
            if (room == 1) return;
            setRoom(prev => prev - 1);
        }
    }

    return (
        <div className="Passengers">
            <div className="head" onClick={() => setDisplay(true)}>
                <p>{adult} adult ∙ {children.length} children ∙ {room} room</p>
            </div>

            {display && <div className="passContainer">
                <div className="tab">
                    Adults

                    <div className="content">
                        <button onClick={handlerAdult}>-</button>
                        {adult}
                        <button onClick={handlerAdult}>+</button>
                    </div>
                </div>

                <div className="tab">
                    Children

                    <div className="content">
                        <button onClick={handlerChilder}>-</button>
                        {children.length}
                        <button onClick={handlerChilder}>+</button>
                    </div>
                </div>

                {
                    children.map((el, index) => <select key={index}>
                        <option>Age needded</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>)
                }

                <div className="tab">
                    Room

                    <div className="content">
                        <button onClick={handlerRoom}>-</button>
                        {room}
                        <button onClick={handlerRoom}>+</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Passengers;