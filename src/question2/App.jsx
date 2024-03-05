// 2. Uppdatera E-post 3p
// Skapa en React-komponent för att visa och uppdatera användarens e-postadress.
// Från början visas användarens nuvarande e-postadress.
// Bredvid e-postadressen ska det finnas en "Redigera"-knapp.

import { useState } from "react";

// När "Redigera" klickas, visa ett inputfält för att skriva in en ny e-postadress
// och byt "Redigera"-knappen till en "Spara"-knapp.
// När "Spara" klickas, uppdatera e-postadressen och visa den uppdaterade adressen.

function App() {
  const [email, setEmail] = useState("qasimajk@gmail.com");
  const [isEditing, setIsEditing] = useState(false);
  const [newEmail, setNewEmail] = useState("");

  function handleEditClick() {
    setIsEditing(true);
    setNewEmail(email);
  }

  function handleSaveClick() {
    setEmail(newEmail);
    setIsEditing(false);
  }
  return (
    <>
      <h1>epost</h1>
      <p>Email: {email}</p>
      {isEditing ? (
        <div>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </>
  );
}

export default App;
