import { Helmet } from 'react-helmet-async';

function Membership() {
  return (
    <>
      <Helmet>
        <title>People’s Party of Kenya - Join Us</title>
        <meta
          name="description"
          content="Become a member of the People’s Party of Kenya. Join the movement for a better Kenya!"
        />
        <meta
          name="keywords"
          content="People’s Party of Kenya membership, join political party, Kenyan youth"
        />
      </Helmet>
      <section className="py-12">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Join the Movement</h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Yo, mwas! Ready to be part of the People’s Party of Kenya? Sign up and let’s
            build a Kenya that’s vibin’ for all of us.
          </p>
          <form className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded"
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-lg font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 border rounded"
                placeholder="+254 700 123 456"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-ppk-green text-white py-2 rounded hover:bg-ppk-grey"
            >
              Join Now
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Membership;
