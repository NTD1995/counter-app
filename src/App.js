import React, { useState } from "react";
export default function App() {
  // 〇〇の状態を管理するステート 
  // カウンターの状態を管理するステート
  const [count, setCount] = useState(0);
  
  // 〇〇を〇〇する処理
  // カウントの数字を1つ増やす処理
  const handleIncrease = () => {
    setCount((count) => count + 1);
  };

  // 〇〇を〇〇する処理
  // カウントの数字を1減らす処理
  const handleDecrease = () => {
    setCount((count) => count - 1);
  };

  // 〇〇を〇〇する処理
  // カウントの数字を2倍にする処理
  const handleDouble = () => {
    setCount((count) => count * 2);
  };

  // 〇〇を〇〇する処理
  // カウントの数字をリセットする処理
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      {/* 数字を表示させる */}
      <h1> カウント{count} </h1>
      {/* ボタンを設置する */}
      <button style={{ fontSize: "20px" }} onClick={handleIncrease}>
        プラス
      </button>
      <button style={{ fontSize: "20px" }} onClick={handleDecrease}>
        マイナス
      </button>
      <button style={{ fontSize: "20px" }} onClick={handleDouble}>
        ２倍
      </button>
      <button style={{ fontSize: "20px" }} onClick={handleReset}>
        リセット
      </button>
      {/* 10以上になったとき、 10以上になりました。が表示される*/}
      {count >= 10 && (
        <div style={{ fontSize: "24px", marginTop: "40px" }}>
          10以上になりました。
        </div>
      )}
      {/* 0以下になったとき、 0以下になりました。が表示される*/}
      {count <= 0 && (
        <div style={{ fontSize: "24px", marginTop: "40px" }}>
          0以下になりました。
        </div>
      )}
    </div>
  );
}
