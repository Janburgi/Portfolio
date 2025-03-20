"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, Check, AlertCircle, Mail } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
  }>({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Create mailto link with form data
    const subject = `Projektanfrage: ${formData.project || "Allgemeine Anfrage"}`
    const body = `Name: ${formData.name}
Email: ${formData.email}
Projektart: ${formData.project || "Nicht angegeben"}

${formData.message}`

    // Open mailto link
    window.location.href = `mailto:jan.burg207@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setFormStatus({
      success: true,
      message: "Dein E-Mail-Programm wurde geöffnet. Bitte sende die E-Mail, um deine Anfrage abzuschließen.",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="bg-black/50 rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
      <p className="text-gray-400 mb-6">Lass uns an deinem nächsten Projekt zusammenarbeiten!</p>

      {formStatus.message && (
        <div
          className={`p-4 mb-6 rounded-md ${formStatus.success ? "bg-green-900/20 text-green-400" : "bg-red-900/20 text-red-400"}`}
        >
          {formStatus.success ? (
            <Check className="inline-block mr-2 h-5 w-5" />
          ) : (
            <AlertCircle className="inline-block mr-2 h-5 w-5" />
          )}
          {formStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="project" className="block text-sm font-medium mb-1">
            Projektart
          </label>
          <select
            id="project"
            name="project"
            value={formData.project}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
          >
            <option value="">Bitte wählen</option>
            <option value="musikvideo">Musikvideo</option>
            <option value="drohne">Drohnenaufnahmen</option>
            <option value="kommerziell">Kommerzielles Video</option>
            <option value="social">Social Media Video</option>
            <option value="other">Sonstiges</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Projektbeschreibung
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
            placeholder="Erzähl mir mehr über dein Projekt..."
            required
          ></textarea>
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Wird gesendet...
            </>
          ) : (
            "Anfrage senden"
          )}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-400">Oder kontaktiere mich direkt per E-Mail:</p>
        <a href="mailto:jan.burg207@gmail.com" className="inline-flex items-center mt-2 text-primary hover:underline">
          <Mail className="mr-2 h-4 w-4" />
          jan.burg207@gmail.com
        </a>
      </div>
    </div>
  )
}

