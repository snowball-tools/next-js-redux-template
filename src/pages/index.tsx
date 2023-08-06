import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Next.js App with Redux!</h1>
      <p>
        This is a simple example of using Next.js with Redux and TypeScript.
      </p>
      <Link href="/Counter">Go to Counter Page</Link>
    </div>
  );
};

export default Home;
