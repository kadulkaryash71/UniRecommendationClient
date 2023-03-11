import React from 'react'

function Textbox({ rows, cols, styleClasses }) {
    return (
        <textarea className={"p-2 " + styleClasses} rows={rows} cols={cols} placeholder="Share your thoughts..." />
    )
}

export default Textbox