import Link from "next/link";

const Page404 = () => {
  return (
    <div>
      <h1>Opps, something go wrong</h1>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};
export default Page404;
