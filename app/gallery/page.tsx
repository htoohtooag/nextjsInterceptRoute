import Image from "next/image";

export default function GalleryPage() {
    const images = [1, 2, 3, 4]; // Example gallery images
  
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Gallery</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img} className="bg-gray-200 rounded-lg shadow-lg overflow-hidden group" >
              <Image src={`/images/${img}.jpg`}  width={100} height={100} alt={`images${img}`}/>
            </div>
          ))}
        </div>
        
      </div>
    );
  }
  