import ButtonLink from "./ButtonLink.jsx";
import { labLocation } from "../data/siteContent.js";

function LocationInfoItem({ item }) {
  return (
    <div className="location-info-item">
      <h3>{item.label}</h3>
      <p>{item.value}</p>
    </div>
  );
}

export default function ForestSection() {
  return (
    <section className="forest-section location-section">
      <div className="inside forest-intro location-intro">
        <div>
          <h2>{labLocation.title}</h2>
        </div>
        <div>
          <ButtonLink href={labLocation.mapHref} target="_blank">
            길찾기
          </ButtonLink>
        </div>
      </div>

      <div className="inside location-map-wrap">
        <iframe
          className="location-map"
          title="AICS 연구실 위치 지도"
          src={labLocation.mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <div className="inside location-info">
        {labLocation.details.map((item) => (
          <LocationInfoItem key={item.label} item={item} />
        ))}
      </div>
    </section>
  );
}
