import Link from "next/link";

export const NavBar = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#F2E2B1] shadow">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="hover:text-[#BDB395]">
            Ecommerce Site
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-[#BDB395]">
              Home
            </Link>
            <Link href="/products" className="hover:text-[#BDB395]">
              Products{" "}
            </Link>
            <Link href="/checkout" className="hover:text-[#BDB395]">
              Checkout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
