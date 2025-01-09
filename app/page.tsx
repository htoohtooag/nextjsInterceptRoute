export default function HomePage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to the App</h1>
        <p className="text-lg text-gray-700 mb-4">
          Explore the feed, view photos, or check out the gallery.
        </p>
        <div className="space-x-4">
          <a href="/feed" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Go to Feed
          </a>
          <a href="/gallery" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            View Gallery
          </a>
        </div>
      </div>
    );
  }
  