import { useState } from "react";

function Navv() {
  const [open, setOpen] = useState(false);

  const Menu = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <button onClick={Menu}>
       open
      </button>

      <nav >
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default Navv;
