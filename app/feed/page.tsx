import Image from "next/image";

export default function FeedPage() {
    const photos = [1, 2, 3, 4]; // Example photo IDs
  
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Photo Feed</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((id) => (
            <a
              key={id}
              href={`/photo/${id}`}
              className="relative bg-gray-200 rounded-lg shadow-lg overflow-hidden group"
            >
              <Image src={`/images/${id}.jpg`}  width={100} height={100} alt={`images${id}`}/>
              
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                View Photo {id}
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }
  