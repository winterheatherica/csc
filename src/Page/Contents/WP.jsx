import React, { useState } from 'react';

// ini udh sesuai tapi gw males styling, sorry
// gw bingung mau nyimpen apa di database + gw gabisa modeling databasenya error mulu
// paling gw bisa nyimpen id_history, jenis metode, dan siapa yang dipilih.
// tapi ini cuma 1 tabel dan 3 column doang, gpp kah?

const WP = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  const [arr3, setArr3] = useState([]);
  const [arrAkhir, setArrAkhir] = useState([]);

  const handleNumChange = (event) => {
    const { value } = event.target;
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue) && parsedValue >= 0) {
      setNum(parsedValue);
      setArr1(Array(parsedValue).fill(0));
      setArr2(Array(parsedValue).fill('b'));
    }
  };

  const handleNum2Change = (event) => {
    const { value } = event.target;
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue) && parsedValue >= 0) {
      setNum2(parsedValue);
      setArr3(Array(parsedValue).fill(null).map(() => Array(num).fill(0)));
    }
  };

  const handleArr1Change = (index, value) => {
    const newArr1 = [...arr1];
    newArr1[index] = parseFloat(value);
    setArr1(newArr1);
  };

  const handleArr2Change = (index, value) => {
    const newArr2 = [...arr2];
    newArr2[index] = value;
    setArr2(newArr2);
  };

  const handleArr3Change = (i, j, value) => {
    const newArr3 = [...arr3];
    newArr3[i][j] = parseFloat(value);
    setArr3(newArr3);
  };

  const calculateResults = () => {
    const total = arr1.reduce((sum, value) => sum + value, 0);

    const arr4 = arr1.map((value, index) =>
      arr2[index] === 'c' ? (value * -1) / total : value / total
    );

    const arr5 = arr3.map((row) => 
      row.reduce((product, value, index) => product * Math.pow(value, arr4[index]), 1)
    );

    const totalArr5 = arr5.reduce((sum, value) => sum + value, 0);

    const arrAkhir = arr5.map((value) => value / totalArr5);

    setArrAkhir(arrAkhir);
  };

  return (
    <div>
      <h1>WP!</h1>
      <input
        type="number"
        value={num}
        onChange={handleNumChange}
        min="0"
      />
      {arr1.map((value, index) => (
        <div key={index}>
          <input
            type="number"
            value={value}
            onChange={(e) => handleArr1Change(index, e.target.value)}
          />
          <input
            type="radio"
            name={`radio-${index}`}
            value="b"
            checked={arr2[index] === 'b'}
            onChange={(e) => handleArr2Change(index, e.target.value)}
          /> B
          <input
            type="radio"
            name={`radio-${index}`}
            value="c"
            checked={arr2[index] === 'c'}
            onChange={(e) => handleArr2Change(index, e.target.value)}
          /> C
        </div>
      ))}
      <input
        type="number"
        value={num2}
        onChange={handleNum2Change}
        min="0"
      />
      {arr3.map((row, i) => (
        <div key={i} style={{ display: 'flex', gap: '5px' }}>
          {row.map((value, j) => (
            <input
              key={j}
              type="number"
              value={value}
              onChange={(e) => handleArr3Change(i, j, e.target.value)}
            />
          ))}
        </div>
      ))}
      <button onClick={calculateResults}>Hitung</button>
      <div>
        {arrAkhir.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </div>
    </div>
  );
};

export default WP;