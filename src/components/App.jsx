import React from "react";
import Entry from"./entry";
import emojipedia from "../emojipedia";
function CreateEntry(emojiterm){
  return(
<Entry 
id={emojiterm.id}
key={emojiterm.id}

emoji={emojiterm.emoji}
name={emojiterm.name}

description={emojiterm.meaning}/>
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>


      <dl className="dictionary">
    
      {emojipedia.map(CreateEntry)}
  </dl>
  </div>
  );
}

export default App;
