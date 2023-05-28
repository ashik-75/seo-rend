import Link from "next/link";

function Header() {
  return (
    <div className=" bg-lime-900/5">
      <ul className="max-w-7xl mx-auto p-5 py-10">
        <li>
          <Link href={"/"}>Home(SSG)</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
