import React from 'react'

class Props{
  githubLink:string
}

function Footer(props:Props) {

  const dark = () => {
    const isDark = document.documentElement.classList.toggle('dark')

    localStorage.setItem('color-schema',isDark ? 'dark' : 'light')
  }

  return (
      <nav className="text-xl mt-6 inline-flex gap-2">
        <button onClick={dark} className="icon-btn">
          <div className="i-carbon-sun dark:i-carbon-moon" />
        </button>
        <a href={props.githubLink} target="_blank" className="icon-btn i-carbon-logo-github" rel="noreferrer" />
      </nav>
  )
}

export default Footer
