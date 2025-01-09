import Link from "next/link";

export default function page() {
  return (
    <div>
        <h1>This is f1 page</h1>
        <Link href={"/f1/f2"}>F2</Link>
   </div>
  )
}
