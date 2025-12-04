import riderData from "./../data/riderData.json";
import RiderSection from "./riderSection";

export default function Choices() {
  return (
          <div className="choices">
             <div className="section-container">
          {riderData.map((rider, index) => {
            return (
              <RiderSection
                key={index}
                title={rider.title}
                active={rider.active}
                description={rider.description}
                items={rider.items}
              />
            );
          })}
                  </div>
           <h2>NOTES</h2>
        <p>
          All the material Nos are for the purchase of virgin materials from a
          for-profit business. Yes to non-primary use of these materials, e.g.
          reuse of exisiting crates, materials stock, purchasing from
          salvage/reuse centers, etc.
        </p>

          </div>
  );
}
