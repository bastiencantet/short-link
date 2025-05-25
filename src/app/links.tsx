"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, ExternalLink, Mail, Moon, Sun, Globe } from "lucide-react"
import { useState, useEffect } from "react"

export default function LinksPage() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem("theme")
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        setIsDark(saved === "dark" || (!saved && prefersDark))
    }, [])

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [isDark])

    // Replace with your actual details
    const personalInfo = {
        name: "Bastien Cantet",
        bio: "Hey there! I'm a developer who loves building cool stuff. Here are my links 😊",
        photo: "https://avatars.githubusercontent.com/u/43909152?v=4", // Replace with your actual photo
        email: "your.email@example.com", // Update with your real email
        linkedin: "https://linkedin.com/in/your-profile", // Update with your real LinkedIn
        github: "https://github.com/your-username", // Update with your real GitHub
        website: "https://bastiencantet.com",
    }

    const linkCategories = [
        {
            title: "Connect",
            links: [
                {
                    name: "LinkedIn",
                    url: personalInfo.linkedin,
                    icon: Linkedin,
                    description: "Let's connect professionally",
                },
                {
                    name: "GitHub",
                    url: personalInfo.github,
                    icon: Github,
                    description: "Check out my code",
                },
                {
                    name: "Email",
                    url: `mailto:${personalInfo.email}`,
                    icon: Mail,
                    description: "Drop me a message",
                },
            ],
        },
        {
            title: "My Work",
            links: [
                // {
                //     name: "Personal Website",
                //     url: "https://bastiencantet.com",
                //     icon: Globe,
                //     description: "My portfolio and blog",
                // },
                {
                    name: "Renifler",
                    url: "https://renifler.io",
                    icon: Globe,
                    description: "Analyze any website's tech stack instantly",
                },
            ],
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-black dark:to-slate-950 p-4 transition-colors duration-300">
            <Button
                onClick={() => setIsDark(!isDark)}
                variant="outline"
                size="icon"
                className="fixed top-4 right-4 z-10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm dark:border-slate-700"
            >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            <div className="max-w-md mx-auto pt-16">
                {/* Profile Section */}
                <div className="text-center mb-12">
                    <div className="mb-6">
                        <img
                            src={personalInfo.photo || "/placeholder.svg"}
                            alt={personalInfo.name}
                            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white dark:border-slate-800 shadow-lg"
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{personalInfo.name}</h1>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed px-4">{personalInfo.bio}</p>
                </div>

                {/* Categorized Links */}
                <div className="space-y-8">
                    {linkCategories.map((category) => (
                        <div key={category.title}>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 px-2">{category.title}</h2>
                            <div className="space-y-3">
                                {category.links.map((link) => (
                                    <Card
                                        key={link.name}
                                        className="dark:bg-slate-950 dark:border-slate-800 hover:shadow-md transition-shadow p-0"
                                    >
                                        <CardContent className="p-0">
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center p-6 group hover:bg-gray-50 dark:hover:bg-slate-900 transition-colors rounded-lg"
                                            >
                                                <link.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 mr-4" />
                                                <div className="flex-1">
                                                    <div className="font-medium text-gray-900 dark:text-white">{link.name}</div>
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">{link.description}</div>
                                                </div>
                                                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                                            </a>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Simple footer */}
                <div className="text-center mt-12 pb-8">
                    <p className="text-gray-400 dark:text-gray-500 text-sm">Thanks for stopping by! 👋</p>
                </div>
            </div>
        </div>
    )
}
