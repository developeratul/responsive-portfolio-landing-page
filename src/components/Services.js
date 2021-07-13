import SectionTitle from "./SectionTitle";
import ServiceData from "../data/ServiceData"

const Services = () => {
  return (
    <section className="services_section">
      <div className="container">
        <SectionTitle
          title="My Awesome Service"
          desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
        />

        <div className="service_content_wrapper">
          {ServiceData.map((service, index) => {
            return (
              <div className="single_service" key={index}>
                <h2 className="icon">{service.icon}</h2>
                <h2>{service.title}</h2>
                <p>{service.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
