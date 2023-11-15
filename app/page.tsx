import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">USERS NAVIGATION</Link>
      <br />
      <Link href="/api/auth/signin">
        <button className="btn btn-primary">SIGN IN</button>
      </Link>
      <ProductCard />
    </main>
  );
}
