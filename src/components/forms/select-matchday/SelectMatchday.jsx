import { useState } from 'react';

export default function SelectMatchday({ matches, onSelect }) {

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (event) => {
    
    // Update the selectedOption state with the selected value
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Call the onSelect function with the selected value
    onSelect(selectedValue);
  };

  return (
    <select className="form-select mt-4" aria-label="select matchday" value={selectedOption} onChange={handleSelect}>
      <option selected>Select matchday...</option>
      {matches.map((elem, i) => <option key={i} value={i + 1}>Matchday {i + 1}</option>)}
    </select>
  )
};

SelectMatchday.defaultProps = {
  matches: [],
  onSelect: () => {}
};
