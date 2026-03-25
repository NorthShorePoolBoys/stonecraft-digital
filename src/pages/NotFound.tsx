import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const BASE_URL = "https://www.newenglandpaversandstone.com";

const NotFound = () => (
  <>
    <SEOHead
      title="Page Not Found | New England Pavers & Stone"
      description="The page you are looking for does not exist. Return to New England Pavers & Stone homepage. Call (617) 697-3456."
      breadcrumbs={[
        { name: "Home", url: BASE_URL },
        { name: "404", url: `${BASE_URL}/404` },
      ]}
    />
    <section className="pt-[160px] pb-20 px-5 md:px-12 min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="font-display text-[clamp(80px,15vw,200px)] text-white leading-none mb-4">404</h1>
      <p className="text-off text-lg mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className="px-[22px] py-2.5 bg-accent text-white no-underline text-xs tracking-[1.5px] uppercase font-semibold hover:bg-accent-hover transition-all">
        Back to Home →
      </Link>
    </section>
  </>
);

export default NotFound;
