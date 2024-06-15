import React, { useEffect, useState } from 'react';
import axios from 'axios';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get('http://localhost:3001/history');
        setHistory(response.data);
      } catch (error) {
        console.error('Error fetching history:', error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="p-4 bg-yellow-600 relative min-h-screen">
      <h1 className="text-2xl mb-4 Genshin-Impact text-yellow-100">History</h1>
      <div className="bg-yellow-700 rounded-lg p-4">
        <table className="min-w-full bg-yellow-200">
          <thead>
            <tr>
              <th className="border px-4 py-2 Genshin-Impact text-yellow-900">Date</th>
              <th className="border px-4 py-2 Genshin-Impact text-yellow-900">Method</th>
              <th className="border px-4 py-2 Genshin-Impact text-yellow-900">Alternative</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-yellow-100' : 'bg-yellow-300'}>
                <td className="border px-4 py-2 Genshin-Impact">{entry.date}</td>
                <td className="border px-4 py-2 Genshin-Impact">{entry.method}</td>
                <td className="border px-4 py-2 Genshin-Impact">{entry.alternatif}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;