import {useRef} from 'react';

const App = () => {
  const inputRef = useRef(null);

  const submit = () => {
    console.log(inputRef.current);
    console.log(inputRef.current.value);
    inputRef.current.style.backgroundColor = "red";
    inputRef.current.style.color = 'white';
    inputRef.current.setAttribute('placeholder', 'updated...');
  }

  console.log(inputRef);

  return ( 
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">UseRef Example</h2>

      <input 
        type="text"
        placeholder="Type something...."
        className="w-full p-2 border rounded-lg"
        ref={inputRef}
      />

      <button onClick={submit} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit
      </button>
    </div>
   );
}
 
export default App;