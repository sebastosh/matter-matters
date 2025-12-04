import RiderSingleItem from "./ridersingleitem";

export default function RiderItems({ items, title }) {
  return (
    <div className="rider-items">
      {title === "OPENING" ? null : "Therefore,"}

      {items.map((item, index) => {
        return (
          <RiderSingleItem
            key={index}
            id={index}
            item={item.item}
            checked={item.checked}
          />
        );
      })}
    </div>
  );
}
