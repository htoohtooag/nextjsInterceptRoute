export default function DashboardPage() {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
        <p className="text-lg text-gray-600">This is your main dashboard.</p>
        <div className="mt-4">
          <a
            href="/"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }
  