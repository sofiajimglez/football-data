import { useState } from 'react';

export default function SelectMatchday({ matches, onSelect }) {

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <select className="form-select mt-4" aria-label="select matchday" value={selectedOption} onChange={handleSelect}>
      <option selected>Select matchday...</option>
      {matches.map((elem, i) => <option key={i} value={i + 1}>Matchday {i + 1}</option>)}
    </select>
  )
}
