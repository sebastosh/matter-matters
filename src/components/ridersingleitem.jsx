import { useState } from 'react';
import Checkbox from './checkbox';

export default function RiderSingleItem({ item, id }) {

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const singleItemDash = item.replace(/\s+/g, '-')
  const itemId = id
  const singleCheckId = singleItemDash + "-00" + itemId

  return (
    <label id={singleItemDash} name={singleItemDash} className={isChecked ? null : "not-checked"}>
 <Checkbox id={singleCheckId} checked={isChecked} onChange={handleCheckboxChange}/>
     {item}
    </label>
  );
}
