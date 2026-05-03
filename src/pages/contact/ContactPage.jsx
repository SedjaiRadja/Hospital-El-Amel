import Footer from "@/components/Footer";
import ContactForm from "../../components/ContactForm";
function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default ContactPage;
