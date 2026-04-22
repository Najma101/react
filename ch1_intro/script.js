// Create React root (this connects React to the HTML div)
const root = ReactDOM.createRoot(document.getElementById("root"));

/* =========================
   COMPONENT 1: Header
   ========================= */

// A component is just a function
function Header() {
  return <h1>Hello Najma 👋</h1>;
}

/* =========================
   COMPONENT 2: Message
   ========================= */

function Message() {
  // You can use variables inside JSX
  const text = "You are learning React 🚀";

  return <p>{text}</p>; // {} lets you use JS inside JSX
}

/* =========================
   COMPONENT 3: Button
   ========================= */

function Button() {
  // Function that runs when button is clicked
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    // React uses camelCase: onClick
    <button onClick={handleClick}>Click Me</button>
  );
}

/* =========================
   MAIN APP COMPONENT
   ========================= */

function App() {
  return (
    <div>
      {/* Using components inside another component */}
      <Header />
      <Message />
      <Button />
    </div>
  );
}

/* =========================
   RENDER TO SCREEN
   ========================= */

// This displays everything inside #root
root.render(<App />);

/* =========================
   IMPORTANT NOTES
   ========================= */

// 1. JSX must have ONE parent element
// ❌ WRONG
// return (
//   <h1>Hello</h1>
//   <p>World</p>
// );

// ✅ CORRECT
// return (
//   <div>
//     <h1>Hello</h1>
//     <p>World</p>
//   </div>
// );

// 2. class → className
// 3. onclick → onClick
