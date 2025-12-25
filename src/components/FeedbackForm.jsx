import { useState } from "react";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  //   const [isSending, setIsSending] = useState(false);
  //   const [isSent, setIsSent] = useState(false);

  const [status, setStatus] = useState("typing");

  // amra goto din a jei example ta dekhechilam oita r eita prai same
  // akhn ekhane jei bisoita bolar chesta koreche seita ektu dekhi amra
  // ekhane isSending ekta state mane loading peroid & isSent ekta state mane sending hobar porer ekta state niyeche

  async function handleSubmit(e) {
    // ekhane prothome jeno reload na nei seita ensure koreche
    e.preventDefault();
    // ar por jehetu form ta submit hocche tai setIsSending(true); koreche
    setStatus("sending");
    // ar por ekta setTimeoput call koreche
    await sendMessage(text);
    // jokhn ei function ta complete hoye geche tokhn again setIsSending(false); koreche
    // then setIsSent k true koreche
    // akhn ei code ta properly hoito kaj korche kintu ei code a ekta bishal loop hole ache ja ghotle khub e ekta baje situation hobe, bisoita kemon dhorun ekhane setTimeOut ba actual db call ba something ekta function k call korar por setIsSending(false); ei ta k false korte user ba coder vule geche, tokhn ki hocche  setIsSending(true); hoye thakche ar por abar   setIsSent(true); hoye jacche, akhn isSending & isSent kokhono ki ek sathe true hote pare? mane dhorun ami rm a jacchi & ami basai  a pouche giyechhi duita ki kokhono ek e sathe ghotte pare? kintu eikhane jodi developer ei ekta vul kore tobe ei ghotona ta ghotche, jokhn codebase boro hobe tokhn asole vul ta kothai eita khuje ber kora onek kothin hoye jabe ei jonno react bolche ei code ta kaj korlew muloto code ta vul approch a design kora hoyeche, eita sothink state design pattern noi, so amra ki korte pari amra ekta single state nite pari
    setStatus("sent");
  }

  //   ekhane jeita bola holo  jodi status === sent hoi tobe isSent true r jodi status === sending hoi tobe isSending true
  // tahole ekhane amra jodi vul vabe state management kori onk somoi hoito code kaj korbe kintu code a bug create hobar possiblity beshi thake , so amader k som smoi write pattern ta choose korte hhobe

  const isSent = status === "sent";
  const isSending = status === "sending";

  if (isSent) {
    return <h1>Thanks for feedback!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        className="border-2 p-2 rounded-2xl"
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={isSending}
        type="submit"
      >
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
