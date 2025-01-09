import Image from "next/image";

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function FullPhotoPage({ params }: Props) {
  const {id} = await params
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Photo {id}</h1>
        <Image src={`/images/${id}.jpg`}  width={100} height={100} alt={`images${id}`}/>
        <a
          href="/feed"
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Back to Feed
        </a>
      </div>
    );
  }
  