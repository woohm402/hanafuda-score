import { useEffect, useState } from "react";

const totalMoney = 10000;
const key = "hf-score";

export default function App() {
  const [myMoney, setMyMoney] = useState<number>();

  useEffect(() => {
    if (myMoney === undefined) {
      setMyMoney(Number(localStorage.getItem(key) || totalMoney / 2));
    } else {
      localStorage.setItem(key, String(myMoney));
    }
  }, [myMoney]);

  if (!myMoney) return null;

  return (
    <div>
      <div
        className="App"
        style={{
          display: "flex",
          gap: 100,
          justifyContent: "space-around",
          alignItems: "center",
          height: "calc(100vh - 100px)",
        }}
      >
        <div>
          <h1>허수현</h1>
          <h2>{totalMoney - myMoney}</h2>
          <button onClick={() => setMyMoney(myMoney - 100)}>+100</button>
          <button onClick={() => setMyMoney(myMoney - 500)}>+500</button>
          <button onClick={() => setMyMoney(myMoney - 1000)}>+1000</button>
        </div>
        <div>
          <h1>우현민</h1>
          <h2>{myMoney}</h2>
          <button onClick={() => setMyMoney(myMoney + 100)}>+100</button>
          <button onClick={() => setMyMoney(myMoney + 500)}>+500</button>
          <button onClick={() => setMyMoney(myMoney + 1000)}>+1000</button>
        </div>
      </div>
      <button
        onClick={() => {
          setMyMoney(undefined);
          localStorage.removeItem(key);
        }}
      >
        리셋
      </button>
    </div>
  );
}
