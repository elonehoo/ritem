import React,{DetailedHTMLProps,ButtonHTMLAttributes} from 'react'

class Props{
  name:string
  go:any
  nameModel:any
}

function Main(props:Props) {
  return (
      <div className="App">
        <div className="text-4xl inline-block i-carbon-area-custom" />

        <p>Ritem Mini</p>

        <p>
          <em className="opacity-75 text-sm">
          Opinionated React Vite Starter Template
          </em>
        </p>

        <div className="py-4"></div>

        <input
          placeholder="What's your name?"
          value={props.name}
          onChange={props.nameModel}
          className="px-4 py-2 w-64 text-center bg-transparent outline-none border rounded border-solid border-gray-200 dark:border-gray-700 active:outline-none"
          autoComplete="false"
          type="text" />

        <div>
            <button onClick={props.go} disabled={props.name.length <= 0} className="m-3 text-sm btn">
              Go
            </button>
        </div>

      </div>
  )
}

export default Main
