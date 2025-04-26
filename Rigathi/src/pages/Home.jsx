import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Helmet>
        <title>People’s Party of Kenya - Home</title>
        <meta
          name="description"
          content="Join the People’s Party of Kenya for a vibrant, inclusive future. Empowering youth and all Kenyans."
        />
        <meta
          name="keywords"
          content="People’s Party of Kenya, Kenyan politics, youth empowerment, manifesto"
        />
      </Helmet>
      <section className="bg-ppk-green text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Pamoja Tujenge Kenya Mpya!
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Yo, wazito! Join the vibe na People’s Party of Kenya. We’re here to shake
            things up and build a future that’s lit for all Kenyans.
          </p>
          <Link
            to="/membership"
            className="bg-ppk-grey text-white px-6 py-3 rounded-full hover:bg-white hover:text-ppk-green"
          >
            Join the Movement
          </Link>
        </div>
      </section>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Vision</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            We dream of a Kenya where every mwananchi thrives—youth leading the charge,
            opportunities for all, and a government that’s transparent na accountable.
            Let’s make it happen!
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;