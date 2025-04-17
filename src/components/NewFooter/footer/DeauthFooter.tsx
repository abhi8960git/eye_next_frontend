import FooterHeading from "./FooterHeading"
import FooterImage from "./FooterImage"
import FooterLinks from "./FooterLinks"
import SocialMedia from "./SocialMedia"
import Newsletter from "./NewsLetterComponent"
import Copyright from "./CopyRightComponent"

export default function DeauthFooter() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Top Section - Brand Name */}
        <FooterHeading />

        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12">
          {/* Left Section - Image with Circle */}
          <FooterImage />

          {/* Right Section - Navigation */}
          <FooterLinks />
        </div>

        {/* Bottom Row - Social and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-800 pt-8">
          {/* Social Media */}
          <SocialMedia />

          {/* Newsletter Section */}
          <Newsletter />
        </div>

        {/* Copyright */}
        <Copyright />
      </div>
    </footer>
  )
}
