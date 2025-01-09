export default function FeedLayout({
    children, // Feed page content
  }: {
    children: React.ReactNode;
    modal: React.ReactNode;
  }) {
    return (
      <div className="relative min-h-screen bg-gray-100">
        {/* Feed content */}
        <div>{children}</div>
        <h1>feed layout</h1>
  
      </div>
    );
  }
  