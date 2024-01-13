import LwsLogo from "../assets/Logo.jpg";

export default function Navbar() {
  return (
    <nav className="py-6">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        {/* <!-- Logo --> */}
        <a href="/" className="pl-5">
          <img className="h-[40px]" src={LwsLogo} alt="Lws" />
        </a>
        {/* <!-- Logo Ends --> */}
        <a className="px-5 mr-5 py-2 bg-[#172227] rounded-[44px]" href="#">
          Get Admission
        </a>
      </div>
    </nav>
  );
}
