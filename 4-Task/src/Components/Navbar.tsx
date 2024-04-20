import { Link } from "react-router-dom";

interface NavbarProps {
  title?: string;
  links: { name: string; path: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ title = "React Router", links }) => {
  return (
    <nav className="py-4 min-w-full flex justify-between fixed">
      <Link
        to={"/"}
        className="flex text-2xl hover:underline hover:underline-offset-4 hover:decoration-2 decoration-yellow-500"
      >
        {title}
      </Link>
      <div className="flex mt-1">
        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            {links.map((link) => (
              <Link
                className="text-white duration-300 p-5 rounded-xl hover:text-yellow-500 hover:bg-white/10 mx-1 font-mono"
                to={link.path}
                key={link.name}
              >
                {link.name}
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
