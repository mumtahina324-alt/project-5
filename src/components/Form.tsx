import { useState } from "react";
export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  // handlers
  const handleFormChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    console.log("   answer", answer);
    e.preventDefault();
    setStatus("loading");
    console.log("status after set loading", status);
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err.message);
    }
  };

  if (status === "success") {
    return <h1>Congratulation Your answer is correct</h1>;
  }

  return (
    <div className=" flex justify-center items-center h-screen">
      <div className="border border-gray-500 rounded p-4">
        {" "}
        <h2>City quiz</h2>
        <p>
          In which city is there a billboard that turns air into drinkable
          water?
        </p>
        <form onSubmit={handleSubmit}>
          <textarea
            rows={4}
            cols={50}
            value={answer}
            onChange={handleFormChange}
            className="border border-gray-500 rounded"
            disabled={status === "loading"}
          />
          <br />
          <button
            type="submit"
            className="border border-gray-500 rounded bg-blue-500 disabled:bg-gray-500 disabled:cursor-not-allowed p-2"
            disabled={status === "loading" || answer.length === 0}
          >
            Submit
          </button>
          {status === "loading" && (
            <div className="text-gray-500">Loading...</div>
          )}
          {error && (
            <div className="text-red-500">
              <p>{error}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "dhaka";
      if (shouldError) {
        console.log("an error from submitForm");
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}

// ei example ta practice koiren, try, catch, async, await, promises, setTimeout eigulo niye researh koiren, r ajker main j uddessho chilo seita holo amra kivabe state k select kori j ei component ar jonno amader koto gulo state neya laghte pare normally amra 5 ta state nite partam, kintu prothome amra sob gulo scrn short hishabe chinta kore probability koto gulo hote pare seita draft korechi, ar por optimize korechi, muloto ei vabei think korte hoi, but eita somoyer sathe experiance barle auto chole ase j amr ki ki state laghbe, echara amra controll uncontroll imperative & declerative proggraming niye jenechi, interview a khub e common ekta question imperative proggramming & declerative programming, so practice more hope so amra tara tari react ar sob gulo topic cover kore nebo
// ok aj asi
