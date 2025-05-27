import TicketConversation from "../components/TicketConversation";

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col bg-gray-50"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <header className="bg-white shadow p-4">
        <h1 className="text-xl font-bold text-gray-900">Customer Service CRM</h1>
        <p className="text-sm text-gray-600">
          Manage refunds, order status, and admin support requests
        </p>
      </header>
      <main className="flex-1">
        <TicketConversation />
      </main>
    </div>
  );
}
