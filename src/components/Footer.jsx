const Footer = () => (
 
<>

 <footer className="bg-[#222] text-white px-6 py-10 text-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 border-b border-gray-600 pb-6">
        <div>
          <h4 className="font-semibold mb-2">ABOUT</h4>
          <ul className="space-y-1">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">GROUP COMPANIES</h4>
          <ul className="space-y-1">
            <li>Myntra</li>
            <li>Cleartrip</li>
            <li>Shopsy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">HELP</h4>
          <ul className="space-y-1">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">CONSUMER POLICY</h4>
          <ul className="space-y-1">
            <li>Cancellation & Returns</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
            <li>EPR Compliance</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Mail Us:</h4>
          <p className="text-gray-300">
            Flipkart Internet Private Limited,<br />
            Buildings Alyssa, Begonia &<br />
            Clove Embassy Tech Village,<br />
            Outer Ring Road, Devarabeesanahalli Village,<br />
            Bengaluru, 560103,<br />
            Karnataka, India
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between text-gray-400 text-xs mt-6">
        <div className="flex flex-wrap gap-6">
          <span>Become a Seller</span>
          <span>Advertise</span>
          <span>Gift Cards</span>
          <span>Help Center</span>
        </div>
        <div>
          © 2007-2025 Flipkart.com
        </div>
      </div>
    </footer>

</>




);

export default Footer;
