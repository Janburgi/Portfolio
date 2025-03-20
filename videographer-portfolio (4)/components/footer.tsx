import Link from "next/link"
import { Instagram, Youtube, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black/80 py-12 mt-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold">VIDEOGRAF</h2>
            <p className="text-muted-foreground mt-2 max-w-md">
              Creating cinematic experiences and visual stories that captivate and inspire.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="bg-background/10 p-2 rounded-full hover:bg-background/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-background/10 p-2 rounded-full hover:bg-background/20 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-background/10 p-2 rounded-full hover:bg-background/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-background/10 p-2 rounded-full hover:bg-background/20 transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Videograf. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

