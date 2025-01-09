import Link from "next/link";

export default function page() {
  return (
    <div>
      <h1>This is f4 page</h1>
      <Link href={'/f1/f3'} className="text-blue-400 underline mx-3">F3</Link>
      <br />
      <Link href={'/dashboard'} className="text-blue-400 underline">dashboard</Link>
    </div>
  )
}
