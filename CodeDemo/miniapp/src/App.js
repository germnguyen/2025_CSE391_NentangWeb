import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from "react";

function diffLists(oldList, newList) {
  const diffs = [];
  const length = Math.max(oldList.length, newList.length);

  for (let i = 0; i < length; i++) {
    const oldItem = oldList[i];
    const newItem = newList[i];

    if (oldItem === undefined) {
      diffs.push({ type: "add", content: newItem });
    } else if (newItem === undefined) {
      diffs.push({ type: "remove", content: oldItem });
    } else if (oldItem !== newItem) {
      diffs.push({ type: "update", from: oldItem, to: newItem });
    }
  }
  return diffs;
  }

  function App() {
  const [list, setList] = useState(["KTPM", "CNTT", "HTTT", "ATTT"]);
  const prevListRef = useRef(list);

  useEffect(() => {
    const prevList = prevListRef.current;
    const diff = diffLists(prevList, list);
    console.log("Diff:", diff);
    prevListRef.current = list;
  }, [list]);

  const addItem = () => {
    setList((prev) => [...prev, `Item ${prev.length + 1}`]);
  };

  const removeItem = () => {
    setList((prev) => prev.slice(0, -1));
  };

  const updateItem = () => {
    if (list.length === 0) return;
    const index = Math.floor(Math.random() * list.length);
    const newList = [...list];
    newList[index] = `Updated ${Math.floor(Math.random() * 100)}`;
    setList(newList);
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h2>Danh sách</h2>
      <ul style={{ listStyleType: "order", padding: 0 }}>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Thêm</button>
      <button onClick={removeItem}>Xoá</button>
      <button onClick={updateItem}>Cập nhật</button>
    </div>
  );
}
export default App;
