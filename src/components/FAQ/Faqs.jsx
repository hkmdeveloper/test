import Accordion from "./Accordion";
import "./Faqs.css";
import { faqJson } from "./faqJson";

const Faqs = () => {
  return (
    <section className="faqs-section">
      <div className="container">
        {/* <div className="heading">FAQs</div> */}
        <div className="faqs-container">
            {faqJson.map((faq)=> <Accordion key={faq.id} {...faq} />)}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
