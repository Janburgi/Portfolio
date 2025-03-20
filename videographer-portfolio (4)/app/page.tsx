"use client"

import { Button } from "@/components/ui/button"
import { Instagram, Youtube, Mail, Music, Video } from "lucide-react"
import { Drone } from "@/components/icons"
import Link from "next/link"
import { VideoCard } from "@/components/video-card"
import { ContactForm } from "@/components/contact-form"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto py-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold">Jan Burgstaller</h1>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Musikvideo Produktion</h2>
          <p className="text-gray-400 text-lg mb-4">
            Spezialisiert auf Musikvideos, Drohnenaufnahmen & Kommerzielle Videos
          </p>
          <p className="text-gray-500 mb-8">Kreative Visuals für Künstler und Marken</p>
          <Button asChild>
            <a href="#kontakt">Projekt anfragen</a>
          </Button>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Portfolio</h2>

        {/* Horizontal Videos - Larger on desktop */}
        <h3 className="text-xl font-medium mb-6">Landscape Videos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            {
              id: 1,
              title: "Musikvideo - 'Lights off' - PlugginP",
              description: "Offizielles Musikvideo für den Track 'Lights off'",
              thumbnailUrl: "https://i.ytimg.com/vi/7bDuKbeXcjY/hqdefault.jpg",
              videoUrl: "https://www.youtube-nocookie.com/embed/80PsEPRswGE?autoplay=1&controls=0&modestbranding=1",
              category: "Musikvideo",
              buttonStyle: "bg-white text-black border-2 border-black shadow-lg", // High contrast white button with black text and border
              labelStyle: "bg-black text-white border border-white", // High contrast black label with white text and border
            },
            {
              id: 2,
              title: "Werbespot - 'Il Gatopardo' - Meister Zenger Coffee",
              description: "Werbevideo für eine kleine Rösterei in Berndorf",
              thumbnailUrl:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-16%20at%2011.19.22.png-dI07Akw94Wx4s8zh52Ba6Fl8GCGuOb.jpeg",
              videoUrl:
                "https://www.youtube-nocookie.com/embed/s1Km6_AUZRI?autoplay=1&controls=0&modestbranding=1&showinfo=0&fs=0&disablekb=1",
              category: "Kommerziell",
              buttonStyle: "bg-white text-black border-2 border-black shadow-lg", // High contrast white button with black text and border
              labelStyle: "bg-black text-white border border-white", // High contrast black label with white text and border
            },
            {
              id: 3,
              title: "Drohnenaufnahmen - Gleißenfeld",
              description: "Atemberaubende Luftaufnahmen von Gleißenfeld",
              thumbnailUrl:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-m82lwPj5vmWzrjVnBgWAllNYo3EoB0.png",
              videoUrl:
                "https://www.youtube-nocookie.com/embed/a0jNzcR21-c?autoplay=1&controls=0&modestbranding=1&showinfo=0&fs=0&disablekb=1",
              category: "Drohne",
              buttonStyle: "bg-white text-black border-2 border-black shadow-lg", // High contrast white button with black text and border
              labelStyle: "bg-black text-white border border-white", // High contrast black label with white text and border
            },
            {
              id: 4,
              title: "Musikvideo - 'Cotton candy' - PlugginP",
              description: "Konzeptbasiertes Musikvideo mit urbanen Locations",
              thumbnailUrl: "https://i.ytimg.com/vi/aIi5QjH0cdQ/hqdefault.jpg",
              videoUrl:
                "https://www.youtube-nocookie.com/embed/aIi5QjH0cdQ?autoplay=1&controls=0&modestbranding=1&showinfo=0&fs=0&disablekb=1",
              category: "Musikvideo",
              buttonStyle: "bg-white text-black border-2 border-black shadow-lg", // High contrast white button with black text and border
              labelStyle: "bg-black text-white border border-white", // High contrast black label with white text and border
            },
          ].map((project) => (
            <VideoCard
              key={project.id}
              title={project.title}
              description={project.description}
              thumbnailUrl={project.thumbnailUrl}
              videoUrl={project.videoUrl}
              category={project.category}
              buttonStyle={project.buttonStyle}
              labelStyle={project.labelStyle}
            />
          ))}
        </div>

        {/* Vertical Videos - More compact on mobile */}
        <h3 className="text-xl font-medium mb-6">Vertical Videos</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              id: 7,
              title: "Restaurant Promotion",
              description: "Vertikales Werbevideo für Social Media",
              thumbnailUrl: "https://img.youtube.com/vi/l2KXvTtcc8c/hqdefault.jpg",
              videoUrl:
                "https://www.youtube-nocookie.com/embed/l2KXvTtcc8c?autoplay=1&controls=0&modestbranding=1&showinfo=0&fs=0&disablekb=1",
              category: "Social Media",
              buttonStyle: "bg-white text-black border-2 border-black shadow-lg",
              labelStyle: "bg-black text-white border border-white",
              isVertical: true,
            },
            {
              id: 8,
              title: "PJ925s 'ShyGuy' Pendant",
              description: "Produktvideo für einen Schmuckdesigner",
              thumbnailUrl: "https://img.youtube.com/vi/s0GMg5Mbyx8/maxresdefault.jpg",
              videoUrl:
                "https://www.youtube-nocookie.com/embed/s0GMg5Mbyx8?autoplay=1&controls=0&modestbranding=1&showinfo=0&fs=0&disablekb=1",
              category: "Social Media",
              buttonStyle: "bg-white text-black border-2 border-black shadow-lg",
              labelStyle: "bg-black text-white border border-white",
              isVertical: true,
              customOverlayOpacity: "opacity-10 group-hover:opacity-70",
            },
            {
              id: 9,
              title: "PJ925s 'ShyGuy' Making of",
              description: "Ein Blick hinter die Kulissen bei der Herstellung von Schmuckstücken",
              thumbnailUrl: "https://img.youtube.com/vi/Y0iQ3O2-DWk/maxresdefault.jpg",
              videoUrl:
                "https://www.youtube-nocookie.com/embed/Y0iQ3O2-DWk?autoplay=1&controls=0&modestbranding=1&showinfo=0&fs=0&disablekb=1",
              category: "Social Media",
              buttonStyle: "bg-white text-black border-2 border-black shadow-lg",
              labelStyle: "bg-black text-white border border-white",
              isVertical: true,
            },
            {
              id: 10,
              title: "Restaurant Grill-Highlights",
              description: "Kurzes vertikales Video für Social Media",
              thumbnailUrl: "https://img.youtube.com/vi/12ikAbCGBIc/maxresdefault.jpg",
              videoUrl:
                "https://www.youtube-nocookie.com/embed/12ikAbCGBIc?autoplay=1&controls=0&modestbranding=1&showinfo=0&fs=0&disablekb=1",
              category: "Social Media",
              buttonStyle: "bg-white text-black border-2 border-black shadow-lg",
              labelStyle: "bg-black text-white border border-white",
              isVertical: true,
            },
          ].map((project) => (
            <VideoCard
              key={project.id}
              title={project.title}
              description={project.description}
              thumbnailUrl={project.thumbnailUrl}
              videoUrl={project.videoUrl}
              category={project.category}
              buttonStyle={project.buttonStyle}
              labelStyle={project.labelStyle}
              isVertical={project.isVertical}
              customOverlayOpacity={project.customOverlayOpacity}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="container max-w-none mx-auto px-4 py-12 md:py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Meine Spezialisierungen</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-medium mb-3">Musikvideos</h3>
              <p className="text-gray-400 text-sm">
                Kreative Visuals für Künstler und Bands. Von Konzeptentwicklung bis zur finalen Produktion.
              </p>
            </div>

            <div className="bg-black/50 p-6 rounded-lg text-center h-full flex flex-col">
              <div className="w-12 h-12 bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Drone className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-medium mb-3">Drohnenaufnahmen</h3>
              <p className="text-gray-400 text-sm">
                Atemberaubende Luftaufnahmen für einzigartige Perspektiven und beeindruckende Landschaftsaufnahmen.
              </p>
            </div>

            <div className="bg-black/50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-amber-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-medium mb-3">Kommerzielle Videos</h3>
              <p className="text-gray-400 text-sm">
                Professionelle Videoproduktion für Unternehmen, Produkte und Dienstleistungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="ueber-mich" className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Über mich</h2>
          <div className="space-y-4">
            <p>
              Ich bin Jan Burgstaller, ein kreativer Videograf mit Leidenschaft für Musikvideos, Drohnenaufnahmen und
              kommerzielle Videoproduktion.
            </p>
            <p>
              Mein Hauptfokus liegt auf der Zusammenarbeit mit Musikern und Bands, um ihre Vision in visuell
              ansprechende Musikvideos umzusetzen. Mit meinem Auge für Ästhetik und Rhythmus erschaffe ich Videos, die
              die Musik perfekt ergänzen und verstärken.
            </p>
            <p>
              Durch den Einsatz von Drohnentechnologie bringe ich eine zusätzliche Dimension in meine Arbeit ein, die
              atemberaubende Perspektiven und einzigartige Bildkompositionen ermöglicht.
            </p>
            <p>
              Für Unternehmen und Marken entwickle ich kommerzielle Videos, die ihre Botschaft klar kommunizieren und
              gleichzeitig visuell beeindrucken. Mein Portfolio umfasst sowohl traditionelle Landscape-Videos als auch
              vertikale Formate für Social Media.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="container max-w-none mx-auto px-4 py-12 md:py-20 bg-zinc-900">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:jan.burg207@gmail.com">jan.burg207@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <Instagram className="h-5 w-5 text-primary" />
              <span>@janburgstaller_video</span>
            </div>
            <div className="flex items-center gap-3">
              <Youtube className="h-5 w-5 text-primary" />
              <span>@jan-burgstaller</span>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-zinc-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500">© {new Date().getFullYear()} Jan Burgstaller. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="https://www.instagram.com/janburgstaller_video/"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.youtube.com/@jan-burgstaller"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </Link>
            <Link href="mailto:jan.burg207@gmail.com" className="text-zinc-500 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

