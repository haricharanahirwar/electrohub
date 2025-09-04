import "./Service.css";

function Service() {
  const services = [
    {
      title: "Custom PC Builds",
      description:
        "Tailored PC configurations to meet your specific needs and preferences.",
      icon: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
    },
    {
      title: "Electronics Repair",
      description:
        "Expert repair services for a wide range of electronic devices.",
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
    },
    {
      title: "Smart Home Setup",
      description:
        "Comprehensive solutions to make your home smarter and more efficient.",
      icon: "https://cdn-icons-png.flaticon.com/512/3061/3061341.png",
    },
    {
      title: "Gadget Consultation",
      description:
        "Professional advice to help you choose the right gadgets.",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
  ];

  return (
    <div className="services py-5">
      <div className="container text-center">
        <h2 className="mb-4">Our Services</h2>
        <p className="lead mb-5">
          We offer a range of services to cater to your electronic needs.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.icon} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
