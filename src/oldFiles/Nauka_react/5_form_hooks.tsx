import * as React from "react";
import { useState, FunctionComponent } from "react";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    const [city, setCity] = useState("Warszawa");
    const [text, setText] = useState("sone text");
    const [isLoved, setIsLoved] = useState(true);
    const [number, setNumber] = useState(0);

    const handleChangeNumber = (e: any) => {
        setNumber(2);
        console.log(e.target);
        // setNumber(e.target.value);
    };

    return (
        <div>
            <h1>Form</h1>
            <div>
                <label htmlFor="">
                    Podaj miasto:
                    <div>
                        <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                </label>
            </div>
            <div>
                <label htmlFor="">
                    Proszę napisz coś ciekawego:
                    <div>
                        <textarea name="text" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                    </div>
                </label>
            </div>
            <div>
                <label htmlFor="">
                    Czy lubisz to miasto?
                    <div>
                        <input
                            name="isLoved"
                            type="checkbox"
                            checked={isLoved}
                            onChange={(e) => setIsLoved(e.target.checked)}
                        />
                    </div>
                </label>
            </div>
            <div>
                <label htmlFor="">
                    Ile razy tam byles
                    <div>
                        <select name="number" value={number} onChange={handleChangeNumber.bind(this)}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="more">więcej</option>
                        </select>
                    </div>
                </label>
            </div>
        </div>
    );
};

export default App;
