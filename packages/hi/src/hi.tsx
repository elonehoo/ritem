import React from 'react'

class Props{
  name:string
  back:any
}

function Hi(props:Props) {
  return (
      <div>
        <div className="text-4xl inline-block i-carbon-two-person-lift" />

        <p> Hi, {props.name} </p>

        <p className="text-sm opacity-50">
          <em>Dynamic route!</em>
        </p>

        <div>
          <button
          className="text-sm mt-8 m-3 btn"
          onClick={props.back}
          >
            Back
          </button>
        </div>

      </div>
  )
}

export default Hi
