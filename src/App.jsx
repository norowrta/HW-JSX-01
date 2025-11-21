import "./App.css";

const name = "Maksym";
const url =
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSfIbStL_D26BjXBEin4HKiPNUPV1v5SdeakrZFHHeV2B_vUDMR";
const alt = "Thats a dog!";
const list = [
  { id: 1, site: "Youtube", url: "https://youtube.com" },
  { id: 2, site: "Netflix", url: "https://netflix.com" },
  { id: 3, site: "Gemini", url: "https://gemini.google.com" },
];

let x = 5;
let y = 10;

const colors = ["red", "green", "blue"];

function App() {
  return (
    <div>
      <h1> {name} </h1>
      <p> Ласкаво просимо до нашого сайту! </p>
      <img src={url} alt={alt} />

      <h3>My favourite websites!</h3>
      <ul style={{ listStyleType: "none" }}>
        {list.map((item) => (
          <li key={item.id}>
            <a href={item.url}> {item.site}</a>
          </li>
        ))}
      </ul>

      <p>5 + 10 = {x + y}</p>

      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          listStyleType: "none",
        }}
      >
        {colors.map((item) => (
          <li
            key={item}
            style={{
              backgroundColor: item,
              borderRadius: "5px",
              padding: "8px 0",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
