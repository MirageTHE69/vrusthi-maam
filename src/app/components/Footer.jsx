import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Send,
  Headphones,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Capabilities", href: "/capabilities" },
    { name: "Life @ Bennet", href: "/life-at-bennet" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-white pt-16 pb-8 border-t-4 border-[#aeca1d]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 */}
        <div className="flex flex-col space-y-6">
          {/* Logo */}
          <Image
            src="/bennet.png"
            alt="Bennet Pharmaceuticals Ltd."
            width={100}
            height={40}
            className="h-10 w-36"
          />

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-[#9DC41A]" />
              <p className="text-sm">
                608 B Wing, 6th Floor
                <br />
                Manubhai Tower, Sayajigunj,
                <br />
                Vadodara, Gujarat 390005
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Headphones className="w-4 h-4 text-[#9DC41A]" />
              <p className="text-sm">0265 236 1750</p>
            </div>
            <div className="flex items-center space-x-3">
              <Send className="w-4 h-4 text-[#9DC41A]" />
              <p className="text-sm">info@bennetpharmaceuticals.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-4 h-4 text-[#9DC41A]" />
              <p className="text-sm">10:00 - 18:00, Mon - Sat</p>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col md:items-center space-y-6">
          <h3 className="text-lg font-bold">Quicklinks</h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm hover:text-[#9DC41A]">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className="text-lg font-bold">Connect With Us</h3>
            <div className="space-y-4 mt-4">
              <div className="flex items-center space-x-3">
                <Linkedin className="w-4 h-4 text-[#9DC41A]" />
                <span className="text-sm">LinkedIn</span>
              </div>
              <div className="flex items-center space-x-3">
                <Send className="w-4 h-4 text-[#9DC41A]" />
                <span className="text-sm">cm@bennetpharmaceuticals.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Send className="w-4 h-4 text-[#9DC41A]" />
                <span className="text-sm">jobs.bennet@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-bold">Contact for Exports</h3>
            <div className="space-y-4 mt-4">
              <div className="flex items-center space-x-3">
                <Send className="w-4 h-4 text-[#9DC41A]" />
                <span className="text-sm">exports@bennet.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Headphones className="w-4 h-4 text-[#9DC41A]" />
                <span className="text-sm">+91 9825110437</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
