import React, { useState } from 'react';
import SaveButton from './SaveButton';

const AHP = () => {
  const [Krit, setKrit] = useState(0);
  const [Alt, setAlt] = useState(0);
  const [weightLabels, setWeightLabels] = useState([]);
  const [alternativeLabels, setAlternativeLabels] = useState([]);
  const [bORc, setBORc] = useState([]);
  const [arr1, setArr1] = useState([]);
  const [arr5, setArr5] = useState([]);
  const [arr9, setArr9] = useState([]);
  const [maxValue, setMaxValue] = useState(null);
  const [maxLabel, setMaxLabel] = useState('');

  const handleKritChange = (event) => {
    const { value } = event.target;
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue) && parsedValue >= 0) {
      setKrit(parsedValue);
      setWeightLabels(Array(parsedValue).fill('').map((_, index) => `Criteria ${index + 1}`));
      setBORc(Array(parsedValue).fill('b'));
      setArr1(Array(parsedValue).fill(0).map(() => Array(parsedValue).fill(0)));
    }
  };

  const handleAltChange = (event) => {
    const { value } = event.target;
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue) && parsedValue >= 0) {
      setAlt(parsedValue);
      setAlternativeLabels(Array(parsedValue).fill('').map((_, index) => `Alternatif ${index + 1}`));
      setArr5(Array(parsedValue).fill(0).map(() => Array(Krit).fill(0)));
    }
  };

  const handleBORcChange = (index, value) => {
    const newBORc = [...bORc];
    newBORc[index] = value;
    setBORc(newBORc);
  };

  const handleArr1Change = (i, j, value) => {
    const newArr1 = arr1.map((row, rowIndex) =>
      rowIndex === i ? row.map((col, colIndex) => (colIndex === j ? parseFloat(value) : col)) : row
    );
    setArr1(newArr1);
  };

  const handleArr5Change = (i, j, value) => {
    const newArr5 = arr5.map((row, rowIndex) =>
      rowIndex === i ? row.map((col, colIndex) => (colIndex === j ? parseFloat(value) : col)) : row
    );
    setArr5(newArr5);
  };

  const calculate = () => {
    let arr2 = arr1.map(row => [...row]);
    let arr3 = Array(Krit).fill(0);
    let arr4 = Array(Krit).fill(0);
    let total = Array(Krit).fill(0);
    let arr7 = arr5.map(row => Array(Krit).fill(0));
    let arr8 = arr7.map(row => [...row]);
    let arr9 = Array(Alt).fill(0);

    let minimal = Number.MAX_VALUE;
    let maximal = Number.MIN_VALUE;
    let minormax = Array(Krit).fill(0);

    for (let i = 0; i < Krit; i++) {
      let jumlah = 0;
      for (let j = 0; j < Krit; j++) {
        jumlah += arr1[j][i];
      }
      for (let j = 0; j < Krit; j++) {
        arr2[j][i] = arr1[j][i] / jumlah;
      }
    }

    for (let i = 0; i < Krit; i++) {
      let jumlah = 0;
      for (let j = 0; j < Krit; j++) {
        jumlah += arr2[i][j];
      }
      arr3[i] = jumlah / Krit;
    }

    for (let i = 0; i < Krit; i++) {
      let jumlah = 0;
      for (let j = 0; j < Krit; j++) {
        jumlah += arr1[i][j] * arr3[j];
      }
      arr4[i] = jumlah;
    }
    for (let i = 0; i < Krit; i++) {
      if (bORc[i] === 'c') {
        minormax[i] = minimal;
      } else if (bORc[i] === 'b') {
        minormax[i] = maximal;
      }
      for (let j = 0; j < Alt; j++) {
        if (bORc[i] === 'c' && minormax[i] > arr5[j][i]) {
          minormax[i] = arr5[j][i];
        } else if (bORc[i] === 'b' && minormax[i] < arr5[j][i]) {
          minormax[i] = arr5[j][i];
        }
      }
    }

    for (let i = 0; i < Alt; i++) {
      for (let j = 0; j < Krit; j++) {
        if (bORc[j] === 'c') {
          arr7[i][j] = minormax[j] / arr5[i][j];
        } else if (bORc[j] === 'b') {
          arr7[i][j] = arr5[i][j] / minormax[j];
        }
      }
    }

    for (let i = 0; i < Krit; i++) {
      let jumlah = 0;
      for (let j = 0; j < Alt; j++) {
        jumlah += arr7[j][i];
      }
      total[i] = jumlah;
      for (let j = 0; j < Alt; j++) {
        for (let k = 0; k < Krit; k++) {
          arr8[j][k] = arr7[j][k] / total[k];
        }
      }
    }

    for (let i = 0; i < Alt; i++) {
      let jumlah = 0;
      for (let j = 0; j < Krit; j++) {
        jumlah += arr8[i][j] * arr3[j];
      }
      arr9[i] = jumlah;
    }

    setArr9(arr9);

    let maxVal = Math.max(...arr9);
    let maxIdx = arr9.indexOf(maxVal);
    let maxLbl = alternativeLabels[maxIdx];

    setMaxValue(maxVal);
    setMaxLabel(maxLbl);
  };

  return (
    <div className="p-4 bg-yellow-600 relative">
      <h1 className="text-2xl mb-4 Genshin-Impact text-yellow-100">Analytical Hierarchy Process (AHP)</h1>
      <div className="mb-4 rounded-lg bg-yellow-700 p-4">
        <label className="block mb-2 Poppins-light text-yellow-200">Masukkan Jumlah Kriteria:</label>
        <input
          type="number"
          value={Krit}
          onChange={handleKritChange}
          min="0"
          className="border p-2 w-full Genshin-Impact bg-yellow-200"
        />
      </div>

      {weightLabels.map((label, index) => (
        <div key={index} className="mb-4 bg-yellow-300 rounded-lg p-4">
          <div className="flex items-center mb-2 Genshin-Impact">
            <input
              type="text"
              value={label}
              onChange={(e) =>
                setWeightLabels(weightLabels.map((item, idx) => (idx === index ? e.target.value : item)))
              }
              className="border p-2 w-full bg-yellow-200"
            />
          </div>
          <div className="flex items-center mb-2 gap-2 Genshin-Impact">
            <label className="flex items-center Genshin-Impact">
              <input
                type="radio"
                name={`radio-${index}`}
                value="b"
                checked={bORc[index] === 'b'}
                onChange={() => handleBORcChange(index, 'b')}
                className="mr-2"
              /> Benefit
            </label>
            <label className="flex items-center Genshin-Impact">
              <input
                type="radio"
                name={`radio-${index}`}
                value="c"
                checked={bORc[index] === 'c'}
                onChange={() => handleBORcChange(index, 'c')}
                className="mr-2"
              /> Cost
            </label>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {arr1[index] &&
              arr1[index].map((val, j) => (
                <input
                  key={j}
                  type="number"
                  value={val}
                  onChange={(e) => handleArr1Change(index, j, e.target.value)}
                  className="border p-2 bg-yellow-100"
                />
              ))}
          </div>
        </div>
      ))}

      <div className="mb-4 bg-yellow-700 rounded-lg p-4">
        <label className="block mb-2 Poppins-light text-yellow-200">Masukkan Jumlah Alternatif:</label>
        <input
          type="number"
          value={Alt}
          onChange={handleAltChange}
          min="0"
          className="border p-2 w-full Genshin-Impact bg-yellow-100"
        />
      </div>
      {alternativeLabels.map((label, i) => (
        <div key={i} className="mb-4 bg-yellow-300 rounded-lg p-4">
          <div className="flex items-center mb-2 Genshin-Impact">
            <input
              type="text"
              value={label}
              onChange={(e) =>
                setAlternativeLabels(alternativeLabels.map((item, idx) => (idx === i ? e.target.value : item)))
              }
              className="border p-2 w-full bg-yellow-200"
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            {arr5[i] &&
              arr5[i].map((val, j) => (
                <input
                  key={j}
                  type="number"
                  value={val}
                  onChange={(e) => handleArr5Change(i, j, e.target.value)}
                  className="border p-2 bg-yellow-100"
                />
              ))}
          </div>
        </div>
      ))}

      <button
        onClick={calculate}
        className="bg-yellow-400 rounded-lg text-black p-2 w-full mb-4 Poppins-light"
      >
        Hitung
      </button>

      <div>
  {arr9.map((value, index) => (
    <input
      key={index}
      type="text"
      value={value}
      readOnly
      className="border p-2 mb-2 w-full Genshin-Impact"
    />
  ))}
</div>
      {maxValue !== null && (
        <div className="mt-4 mb-4 Poppins-light text-yellow-100">
          <strong>Value terbesar dimiliki oleh: {maxLabel} dengan nilai {maxValue}</strong>
        </div>
      )}
      <SaveButton maxLabel={maxLabel} methodLabel={'AHP'} />
    </div>
  );
};

export default AHP;
