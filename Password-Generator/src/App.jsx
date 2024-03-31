import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  //   VARIABLE
  const [length, setlength] = useState(8);

  const [numberAllowed, setNumberAllowed] = useState(false);

  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");

  // PASSWORD GENERATOR FUNCTION,FOR OPTIMIZATION I USE 'useCallback' HOOK
  const passwordGenerator = useCallback(() => {
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstguvwxyz";

    if (numberAllowed) str += "012345678";

    if (charAllowed) str += "!@#$%^&*+-?/|~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  
  // useRef hook
  const passwordRef = useRef();

  // useEffect USED FOR CALL THE FUNCTION
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);



  return (
    <>
      <h1 className=" text-white text-4xl text-center font-bold font-serif mt-4">
        Password Generator 🔐
      </h1>

      <div className=" w-full h-screen flex justify-center">

        <div className=" w-2/3 h-40 mt-6 bg-slate-500  rounded-2xl">

          <div className=" flex justify-center">
            <input
              type="text"
              value={password}
              placeholder="Password 🔐"
              readOnly
              className=" outline-none w-3/4 mt-10 h-10 py-1 px-3 text-orange-600"
              ref={passwordRef}
            />

            <button 
            className=" outline-none bg-blue-700 h-10 px-3 py-0.5 shrink-0 mt-10 align-middle text-white"
            onClick={copyPasswordToClipboard}
            >
              Copy
            </button>
            
          </div>

          <div className=" flex gap-20 mx-20 mt-4">
            <div>
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className=" cursor-pointer"
                onChange={(e) => {
                  setlength(e.target.value);
                }}
              />

              <label className=" text-white text-xl">Length :{length}</label>
            </div>

            <div>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label className="text-white text-xl">Number</label>
            </div>

            <div>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="numberInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label className="text-white text-xl">Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
