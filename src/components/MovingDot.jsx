import { useState } from "react";
export default function MovingDot() {
  // accha ekhane dekhun 2 ta div neya hoyeche 1 t aparent div r 1 ta child div, parent div a width height 100vh & 100 vw mane view width & view height, mane full scrn. r position ta relative kora hoyeche jar under a children ta absoute, akhn amader uddhessho cursor k jokhn amra move korbo tokhn dot taw jeno move kore, akhn normally amra ki kori css diye kono kichu k move korte chaile transform tranlate use kori? r amra jani protita jinish ar ekta x axis & y axis thake, amra jodi ei x & y axis ta k get korte pari tobe seitai hobe amader cursor ba pointer ar currrent position, r amra jodi cursor ar position ta k red circle ar position transform kore dei tobe cursor ar j khane thakbe red circle taw sekhanei thakbe, akhn cursor ar move ta jokhn hoi tokhn muloto ekta event call hoi jeita k bole onPointerMove, akhn x axis & y axis k get korar jonno amra prothome state nibo
  //   const [x, setX] = useState(0);
  //   const [y, setY] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handlePointerMove = (e) => {
    // akhn ekhane dekhun always x & y duitai move hocche & duitar value ek sathei amake set korte hocche , akhn amra jodi kebol ekta state nei, position nam a tobei kintu eita beshi meaningful hoi
    // akhn amra individually na niye amra ekta object nilam & single ekta state nilam
    // ekhane amra protibar ekta kore new object pathacchi ba set kortechi jeno ager ta muche jai & notun
    //  value set hoi
    // ekhane arekta ktha boleche jodi emon case ba situation darai jokhn amra janina asole amader value ta ki ba koto gulo hobe tokhn amra seita k group korte pari eita bujhar jonno cholun arekta example dekhi
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
// amra jotobar mouse ta k move kortechi ekta event call hocche, ei clientX & clientY muloto actual location of pointer
