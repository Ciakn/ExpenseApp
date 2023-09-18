import { useEffect, useState } from "react";

const TransActions = ({ transActions }) => {
  const [searchItem, setsearchItem] = useState("");
  const [filteredtnx, setfiltertnx] = useState(transActions);
  const filteredtransactions = (search) => {
    if (search === "" || !search) {
      setfiltertnx(transActions);
      return;
    }
    const filtered = transActions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setfiltertnx(filtered)
  };

  const changeHandler = (e) => {
    setsearchItem(e.target.value);
    filteredtransactions(e.target.value);
    console.log(searchItem);
  };
  useEffect(() => {
    filteredtransactions(searchItem);
  }, [transActions]);
  return (
    <div className="trancActions">
      <input className="search-input" type="text" value={searchItem} onChange={changeHandler}  placeholder = 'Search ...' />
      {filteredtnx.length &&
        filteredtnx.map((t) => (
          <div style={{borderRight : t.type === 'expense'  ? '3px solid red' : '3px solid green'}} className="actions" key={t.id}>
            <span>{t.desc}</span>
            <span>{t.amount}</span>
          </div>
        ))}
    </div>
  );
};

export default TransActions;
