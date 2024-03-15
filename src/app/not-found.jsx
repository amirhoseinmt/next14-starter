import Link from "next/link"

const notFound = () => {
  return (
    <div>
        <h2>not-found</h2>
        <p>sorry, there is nothin here :*</p>
        <Link href="/">Return Home</Link>
    </div>
  )
}

export default notFound