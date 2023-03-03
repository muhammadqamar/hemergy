import Layout from "@/components/layout";
import Contact from "@/components/contactUs";
import { fetchContactUs } from "../contentfulApi";

const ContactUs = ({ contactPage }) => {
  return (
    <Layout>
      <Contact contactPage={contactPage} />
    </Layout>
  );
};

export default ContactUs;

export async function getStaticProps() {
  const contactPage = await fetchContactUs();
  return {
    props: {
      contactPage,
    },
  };
}
