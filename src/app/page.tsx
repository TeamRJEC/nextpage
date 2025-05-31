import TicketForm from "./components/TicketForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="bg-blue-900 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">ConstructionCo</h1>
        <p className="mt-4 text-lg">Quality building solutions for your next project.</p>
      </section>
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>Commercial Construction</li>
          <li>Residential Construction</li>
          <li>Renovations and Remodeling</li>
        </ul>
      </section>
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <TicketForm />
      </section>
    </main>
  );
}
