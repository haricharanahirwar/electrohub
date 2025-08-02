import './Service.css';
function Service() {
const services = [
  {
    title: 'Custom PC Builds',
    description: 'Tailored PC configurations to meet your specific needs and preferences.',
    // icon: 'assets/images/',
  },
  {
    title: 'Electronics Repair',
    description: 'Expert repair services for a wide range of electronic devices.',
    // icon: 'assets/images/',
  },
  {
    title: 'Smart Home Setup',
    description: 'Comprehensive solutions to make your home smarter and more efficient.',
    // icon: 'assets/images/',
  },
  {
    title: 'Gadget Consultation',
    description: 'Professional advice to help you choose the right gadgets.',
    // icon: 'assets/images/',
  },
];

    
    
    return (
        <>
        <div className="services">
      <div className="container">
        <h2>Our Services</h2>
        <p>We offer a range of services to cater to your electronic needs.</p>
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

        </>
    )
}
export default Service;