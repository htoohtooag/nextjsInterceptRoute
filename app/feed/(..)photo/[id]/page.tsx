import Image from "next/image";

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function PhotoModal({ params }: Props) {
  const {id} = await params; 
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

        <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">

          <h1 className="text-2xl font-bold text-gray-800 mb-4">Photo {id}</h1>

          <Image src={`/images/${id}.jpg`}  width={100} height={100} alt={`images${id}`}/>
    
          <p className="text-gray-600"> This is a modal view of the photo. You can close it or go back to the feed. </p>

          <div className="mt-4 flex justify-end space-x-2">
            <a href="/feed" className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"> Close Modal </a>
            <a href={`/photo/${id}`} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" > Open Full Page </a>
          </div>

        </div>
        
      </div>
    );
  }
  