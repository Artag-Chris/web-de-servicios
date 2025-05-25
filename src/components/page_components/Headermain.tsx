"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { handleResumeDownload } from '@/functions/handleResumenDownload'

function HeaderMain() {
  return (
    <>
    <header className="container mx-auto py-6 px-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <span className="text-emerald-500">Artag</span>Dev
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#about" className="hover:text-emerald-400 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-emerald-400 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-emerald-400 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-emerald-400 transition-colors">
              Contact
            </Link>
          </div>
          <Button variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-500/10"
           onClick={handleResumeDownload}>
            Resume
          </Button>
        </nav>
      </header>
      </>
  )
}

export default HeaderMain