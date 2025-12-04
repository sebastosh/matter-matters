const Checkbox = ({ id, checked, onChange }) => {
  return (
    <input
      name={id}
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
