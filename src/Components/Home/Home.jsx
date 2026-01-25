import { Link } from "react-router"

export default function Home() {
  return (
    <>
      <h1>
        My cool geodata site
      </h1>
      <Link to="/States" >
        View States
      </Link>
    </>
  )
}