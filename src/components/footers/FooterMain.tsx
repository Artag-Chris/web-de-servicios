import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

function FooterMain() {
  return (
    <div>
        {/* Footer */}
      <footer className="bg-zinc-900 py-8 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">
              <span className="text-emerald-500">Dev</span>Portfolio
            </div>
            <div className="text-zinc-400 text-sm">© {new Date().getFullYear()} All rights reserved.</div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-emerald-500">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-emerald-500">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-emerald-500">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FooterMain