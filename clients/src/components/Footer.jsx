import { Github, X, Mail, MapPin, Phone, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Wasirul.dev</h2>
          <p className="text-sm leading-relaxed">
            Full-stack developer building scalable MERN applications with clean
            UI and performance-focused backend systems.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4" />
              wasirul@example.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4" />
              +91 9876543210
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4" />
              India
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>

          <div className="flex gap-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition transform hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition transform hover:scale-110"
            >
              <X className="w-5 h-5" />
            </a>

           
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm flex justify-center items-center gap-2">
        © {new Date().getFullYear()} Wasirul — Made with
        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
      </div>
    </footer>
  );
};

export default Footer;
