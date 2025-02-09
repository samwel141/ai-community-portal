import { Link, Outlet, useLocation } from "@remix-run/react"
import { Logo } from "~/components/icons"

const HelpLayout = () => {
  const location = useLocation()

  return (
    <>
      <div className="sticky top-0 z-10 bg-primary px-1 md:px-4 flex justify-between items-center gap-4">
        <Logo className="size-6 md:size-8" />
        <div className="flex gap-4 md:gap-8 mr-[4rem] text-textColor justify-start text-lg">
          {location.pathname.includes("/contact-us") && (
            <Link to="/help" className="hover:opacity-80 text-sm">Back</Link>
          )}
          <Link
            to="/help/contact-us"
            className={`hover:opacity-80 text-sm hidden md:block ${
              location.pathname.includes("/contact-us") ? "text-accent" : ""
            }`}
          >
            Contact us
          </Link>
          <Link
            to="/help/contact-us"
            className={`hover:opacity-80 text-sm md:hidden ${
              location.pathname.includes("/contact-us") ? "text-accent" : ""
            }`}
          >
            Contact
          </Link>
          <Link to="/" className="hover:opacity-80 text-sm md:hidden">Home</Link>
          <Link to="/" className="hover:opacity-80 text-sm hidden md:block">Return Home</Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default HelpLayout
