import React, { useState, useEffect } from 'react'

const Loading = ({ text='Loading' }) => {
  const [ content, setContent ] = useState(text)

  useEffect(() => {
    const id = window.setInterval(() => {
      setContent(content => {
        return content === `${text}...`
        ? text
        : `${content}.`
      })
    }, 300)

    return () => clearInterval(id)

  })

  return (
    <div>
      <p>{content}</p>
    </div>
  )
}

export default Loading