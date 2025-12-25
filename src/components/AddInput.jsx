import { useState } from "react";
export default function AddInput() {
  // akhn amra ekta state nebo
  const [inputs, setInputs] = useState([
    { id: 1, placeholder: "Input number 1" },
  ]);
  // akhn by default jodi amra ekta input dekhate chai tobe amra ekta default object set korbo

  const handleAddInput = () => {
    // akhn ekhane ki korte hobe array te ager object ar sathe notun arekta object add korte hobe new input add korar jonno right? akhn amra ki jani amra jodi array.push kori tobe eita ki kore array ar original value k rewrite kore, ei jonno amra spread use korbo
    // ekhane setInputs a amra ekta array niye tar moddhe prothome old inputs k spread korechi ar por ekta new input add korechi, onek somoi amader ei dhoroner situation dorkar pore jokhn amader input fields gulo dynamically ase, tokhn kintu amra janina j amader k koita input ar data k get korte hobe, dhorun eita ekta registration list j khane ek ekta kore user ar name likhe add korte hoi akhn user 10 ta 20 ta 100  ta eirokom hote pare? akhn jodi situation ta emon hoi tobe to amra useState a firdtUse, setFirstUser , secounduser,SetSecoundUser evabe set korte parbona kno na amra janina user koto guo hobe, tokhn amader k state k group korte hobe and ekta array of string or object a nite hobe, jodi multiple value hoi tobe object single hole string
    setInputs([
      ...inputs,
      {
        id: inputs.length + 1,
        placeholder: `Input number ${inputs.length + 1}`,
      },
    ]);
  };
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      {inputs.map((input) => (
        <input
          key={input.id}
          type="text"
          placeholder={input.placeholder}
          className="border-2 p-2 rounded-2xl"
        />
      ))}

      <button
        onClick={handleAddInput}
        className="bg-blue-500 p-2 rounded-2xl text-white"
      >
        Add New Input
      </button>
    </div>
  );
}
