import "./services.styles.css";

const services = [
  {
    icon: "fas fa-wine-glass",
    title: "Saving Money",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            officia.`,
    id: 1,
  },
  {
    icon: "fas fa-wrench",
    title: "Endless Hiking",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            officia.`,
    id: 2,
  },
  {
    icon: "fas fa-yin-yang",
    title: "Amazing Comfort",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            officia.`,
    id: 3,
  },
];

const Services = () => {
  return (
    <div className="services" id="services">
      <h1 className="special-header">
        our <span>services</span>
      </h1>
      <div className="services-box">
        {services.map((service) => {
          return (
            <div className="service-box" key={service.id}>
              <i class={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
