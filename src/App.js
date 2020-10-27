import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [birthday, setBirthday] = useState(data)
  return <main>
    <section className="container">
      <h3>{birthday.length} Birthday today</h3>
      {birthday.map(birthday => {
        return (
          <List key={birthday.id} {...birthday} />
        )
      })}
      <button className="btn" onClick={() => setBirthday([])}>Clear birthday</button>
    </section>
  </main>;

}

export default App;
