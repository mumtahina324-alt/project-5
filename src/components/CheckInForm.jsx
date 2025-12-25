import { useState } from "react";

export default function CheckInForm() {
  // ekhane dekhun 3 ta state neya hoyeche, firstname lastname & full name ar jonno, amader ei 3 nmr rules ta holo Avoid redundant state mane otirikto ba jei state gulo normally manage kora jai sei gulo k avoid kora
  // ei form ar uddessho holo amra jokhn firstName & lastname likhbo tokhn seita directly scrn a dekhno
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //   const [fullName, setFullName] = useState("");

  const fullName = firstName + " " + lastName;

  function handleFirstNameChange(e) {
    // eita hocche fName change handler
    // ekhane prothome event k target kore value ta k get koreche , kore full name baniyeche
    setFirstName(e.target.value);
    // then  ei value ar sathe existing last name k add koreche
    // setFullName(e.target.value + " " + lastName);
  }

  function handleLastNameChange(e) {
    // ekhane same kaj tai kora hoyeche
    setLastName(e.target.value);
    // setFullName(firstName + " " + e.target.value);
    // ekhane  dekhen ami fullname ta k ekta state a rakhle amake bar bar fName & lname change a fullname set korte hocchilo and ekta jotil senario create hocchilo seita amra state a na rekhe normal ekta varriable diye handle korte parlam, ei dhoroner stae kei avoid korte bola hoyeche
    // amra choosing the state structure ar 3 ta point dekhlam r o 2 ta baki ache eita amra next day dekhbo tar age r ekta bisoi ache seita hocche apni git & github a kotota useto?
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{" "}
        <input
          className="border-2 p-2 rounded-2xl"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{" "}
        <input
          className="border-2 p-2 rounded-2xl"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}

// accha ami apnr j folder ta open korlam sekhane apnr kichu project ache, ja apnr local machine a rakha ache, akhn dhorun ei j ei ekta project jeita te amra kaj korchi, ei project a amra ekta app banailam and client k dekhailam, client akhn amader k bollo j ei ei dhoroner change ano, amra anlam, anar por client bolche j ager version tai valo chilo tmi oitai rakho, akhn apnr kache ki kono way ache ager version a back jabar? eikhane game changer hocche git, muloto amra jodi ager jai gai back jete chai amader k abaro code gulo rewrite korte hoi, kintu git ki kore se amader code a ekjon watcher & tracker hishabe kaj kore, amra jokhn e code a kono change ani git sei change ta k track kore, akhn dhorun sei same kahini client bollo ager version a fire jaw oitai valo chilo, tokhn amra just git k bolbo git amader sei jai gai back kore niye jabe, akhn eita chilo git ar por ktha boli github, apnr local machine ar folder a jemon apnr project gulo ache, temni apni cloude aw apnr project gulo k rakhte paren & world wide j kono jaiga theke ei project k access korte paren, git hub amader k sei sujog ta kore diyeche, git k sorbo prothom amader project a initialize korte hoi  , apni next day ekta new react project create kore rakhben next day theke amra git & github use korbo protita project a
// github thakata boro kotha noi amra amader project gulo k git hub a rkahbo , githuba ccount ache bujhlam kintu apnr code ba project gulo ki github a ache?
// ei project k github a niye jan
// ekhane by defult git add korle branch name hoi master jeita k bortoman a main bola hoi amra eita k main a convert korte nei, eita dile master main hoye jai
// ,  ekhane bolche onBranch master mane amra master branch a achi
//  No commits yet mane amra kono commit korini
// Untracked files: mane ei file gulo untracked obosthai ache
// akhn git ar first step hole git init, ar por git k add korte hoi add korle change gulo stage a jai, akhn add korar khetre amra jodi git add . use kori ar mane holo sob gulo k stage a niye jaw echara amra chaile single single vabew add korte pari like git add src
