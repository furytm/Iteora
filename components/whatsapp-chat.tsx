import Image from "next/image"

export function WhatsAppChat() {
  return (
    <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50">
      <a
        href="http://wa.me/+2349070714274"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <Image
          src="/images/whatsapp-logo.png"
          alt="Chat on WhatsApp"
          width={56}
          height={56}
          className="w-full h-full rounded-full"
        />
      </a>
    </div>
  )
}
