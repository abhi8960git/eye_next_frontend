import Link from "next/link"

type FooterLinkGroupProps = {
  title: string
  links: string[]
}

function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <div>
      <h3 className="font-bold mb-4 md:mb-4 text-sm md:text-base">{title}</h3>
      <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <Link href="#" className="text-gray-400 hover:text-white">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function FooterLinks() {
  const aboutLinks = ["Our Story", "My Account", "Community Initiative", "Fashionable", "Contact Us"]
  const helpLinks = ["Fashionable", "Fashionable", "Fashionable", "Fashionable"]
  const infoLinks = ["Fashionable", "Fashionable", "Fashionable"]

  return (
    <div className="flex-1 md:flex md:justify-end mt-4">
      {/* Mobile Layout (special layout only for small screens) */}
      <div className="md:hidden w-full text-xs">
        {/* Top Row - Two Columns */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-center">
          <FooterLinkGroup title="About Us" links={aboutLinks} />
          <FooterLinkGroup title="Need Help" links={helpLinks} />
        </div>

        {/* Bottom Row - Single Column Centered */}
        <div className="text-center mx-auto max-w-xs">
          <FooterLinkGroup title="More Info" links={infoLinks} />
        </div>
      </div>

      {/* Desktop Layout (standard 3-column layout) */}
      <div className="hidden md:block w-full md:max-w-xl">
        <div className="grid grid-cols-3 gap-8">
          <FooterLinkGroup title="About Us" links={aboutLinks} />
          <FooterLinkGroup title="Need Help" links={helpLinks} />
          <FooterLinkGroup title="More Info" links={infoLinks} />
        </div>
      </div>
    </div>
  )
}
