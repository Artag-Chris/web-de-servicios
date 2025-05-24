  // Handle resume download
  export const handleResumeDownload = () => {
    // Create a link to your resume PDF
    const link = document.createElement("a")
    link.href = "/resume.pdf" // Path to your resume PDF in the public folder
    link.download = "Christian_Resume.pdf" // Name for the downloaded file
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }