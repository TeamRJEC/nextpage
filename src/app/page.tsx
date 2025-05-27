import TicketConversation from "../components/TicketConversation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <header className="border-b border-gray-200 p-4 text-lg font-bold text-gray-800">Customer Support Ticket</header>
      <div className="flex-1">
        <TicketConversation />
      </div>
    </main>
  );
}
