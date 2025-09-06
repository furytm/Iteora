import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#000035] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Business Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/ite-ora-logo.png" alt="Ite Ora" width={150} height={50} className="h-12 w-auto" />
              <span className="text-white text-lg font-serif font-semibold">Freshly made with love</span>
            </div>
            <p className="text-gray-300 mb-4 text-balance">
              Authentic Nigerian cuisine made with love and delivered fresh to your doorstep.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-sm">+2349070714274</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-sm">hello@iteora.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-sm">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#order" className="text-gray-300 hover:text-white transition-colors">
                  Order Food
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/ite_ora?igsh=MWpkM243aW1nZW8wZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://m.youtube.com/@Officiacici?fbclid=PAb21jcAMpR15leHRuA2FlbQIxMQABp8lvW6cARxThfcY4yro2Vcdkk6wxhHM5kkaLUKC7g0NZ52Omhk80vQ4LB92L_aem_LLOI3SzNYlpz8TxzZFF0dA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Youtube size={24} />
              </a>
              <a
                href="http://wa.me/+2349070714274"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">© 2024 Ite Ora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
