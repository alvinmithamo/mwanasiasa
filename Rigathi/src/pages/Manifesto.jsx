import { Helmet } from 'react-helmet-async';

function Manifesto() {
  return (
    <>
      <Helmet>
        <title>People’s Party of Kenya - Manifesto</title>
        <meta
          name="description"
          content="Discover the People’s Party of Kenya manifesto. Our promises to empower youth, create jobs, and build a prosperous Kenya."
        />
        <meta
          name="keywords"
          content="People’s Party of Kenya manifesto, Kenyan politics, youth empowerment, job creation"
        />
      </Helmet>
      <section className="py-12">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Our Manifesto</h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Wazito, this is our blueprint for a Kenya that works for everyone. From jobo
            for the youth to better healthcare, we’re here to deliver!
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Youth Empowerment</h2>
              <p>
                We’ll create 1M+ jobs for vijana through tech hubs, startup funding, and
                vocational training. No more kuji-lenga, let’s hustle smart!
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Affordable Healthcare</h2>
              <p>
                Free primary healthcare for all Kenyans. Hospitals ziko na dawa, and
                medics are paid on time. Health ni right, si privilege.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Education Reform</h2>
              <p>
                Free, quality education from primary to uni. We’ll digitize classrooms
                and train teachers to prep our kids for the future.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Transparent Governance</h2>
              <p>
                No more wizi wa public funds. We’ll digitize government services and
                ensure every shilling is accounted for. Serikali ya wazi!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Manifesto;