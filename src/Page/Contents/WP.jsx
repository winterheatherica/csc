import React, { useState, useEffect } from 'react';
import SaveButton from './SaveButton';

const WP = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  const [arr3, setArr3] = useState([]);
  const [arrAkhir, setArrAkhir] = useState([]);
  const [weightLabels, setWeightLabels] = useState([]);
  const [alternativeLabels, setAlternativeLabels] = useState([]);
  const [maxValue, setMaxValue] = useState(null);
  const [maxLabel, setMaxLabel] = useState('');

  const handleNumChange = (event) => {
    const { value } = event.target;
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue) && parsedValue >= 0) {
      setNum(parsedValue);
      setArr1(Array(parsedValue).fill(0));
      setArr2(Array(parsedValue).fill('b'));
      setWeightLabels(Array(parsedValue).fill(0).map((_, index) => `Weight ${index + 1}`));
    }
  };

  const handleNum2Change = (event) => {
    const { value } = event.target;
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue) && parsedValue >= 0) {
      setNum2(parsedValue);
      setArr3(Array(parsedValue).fill(null).map(() => Array(num).fill(0)));
      setAlternativeLabels(Array(parsedValue).fill(0).map((_, index) => `Alternatif ${index + 1}`));
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

  const handleWeightLabelChange = (index, value) => {
    const newWeightLabels = [...weightLabels];
    newWeightLabels[index] = value;
    setWeightLabels(newWeightLabels);
  };

  const handleAlternativeLabelChange = (index, value) => {
    const newAlternativeLabels = [...alternativeLabels];
    newAlternativeLabels[index] = value;
    setAlternativeLabels(newAlternativeLabels);
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

  useEffect(() => {
    if (arrAkhir.length > 0) {
      const maxValue = Math.max(...arrAkhir);
      const maxIndex = arrAkhir.indexOf(maxValue);
      setMaxValue(maxValue);
      setMaxLabel(alternativeLabels[maxIndex]);
    }
  }, [arrAkhir, alternativeLabels]);

  return (
    <div className="p-4 bg-yellow-600">
      <h1 className="text-2xl mb-4 Genshin-Impact text-yellow-100">Weighted Products (WP)</h1>
      <div className="mb-4 rounded-lg bg-yellow-700 p-4">
        <label className="block mb-2 Poppins-light text-yellow-200">Masukkan Jumlah Kriteria:</label>
        <input
          type="number"
          value={num}
          onChange={handleNumChange}
          min="0"
          className="border p-2 w-full Genshin-Impact"
        />
      </div>
      {weightLabels.map((label, index) => (
        <div key={index} className="mb-4 bg-yellow-300 rounded-lg p-4">
          <div className="flex items-center mb-2 Genshin-Impact">
            <input
              type="text"
              value={label}
              onChange={(e) => handleWeightLabelChange(index, e.target.value)}
              className="border p-2 w-full"
            />
          </div>
          <div className="flex items-center mb-2 Genshin-Impact">
            <input
              type="number"
              value={arr1[index]}
              onChange={(e) => handleArr1Change(index, e.target.value)}
              className="border p-2 w-full"
            />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <label className="flex items-center Genshin-Impact">
              <input
                type="radio"
                name={`radio-${index}`}
                value="b"
                checked={arr2[index] === 'b'}
                onChange={(e) => handleArr2Change(index, e.target.value)}
                className="mr-2"
              /> B
            </label>
            <label className="flex items-center Genshin-Impact">
              <input
                type="radio"
                name={`radio-${index}`}
                value="c"
                checked={arr2[index] === 'c'}
                onChange={(e) => handleArr2Change(index, e.target.value)}
                className="mr-2"
              /> C
            </label>
          </div>
        </div>
      ))}
      <div className="mb-4 bg-yellow-700 rounded-lg p-4">
        <label className="block mb-2 Poppins-light text-yellow-200">Masukkan Jumlah Alternatif:</label>
        <input
          type="number"
          value={num2}
          onChange={handleNum2Change}
          min="0"
          className="border p-2 w-full Genshin-Impact"
        />
      </div>
      {alternativeLabels.map((label, i) => (
        <div key={i} className="mb-4 bg-yellow-300 rounded-lg p-4">
          <div className="flex items-center mb-2 Genshin-Impact">
            <input
              type="text"
              value={label}
              onChange={(e) => handleAlternativeLabelChange(i, e.target.value)}
              className="border p-2 w-full"
            />
          </div>
          <div className="flex flex-col Genshin-Impact">
            {arr3[i] && arr3[i].map((value, j) => (
              <input
                key={j}
                type="number"
                value={value}
                onChange={(e) => handleArr3Change(i, j, e.target.value)}
                className="border p-2 mb-2 w-full"
              />
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={calculateResults}
        className="bg-yellow-400 rounded-lg text-black p-2 w-full mb-4 Poppins-light"
      >
        Hitung
      </button>
      <div>
  {arrAkhir.map((value, index) => (
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
      <SaveButton maxLabel={maxLabel} />
    </div>
  );
  
};

export default WP;
