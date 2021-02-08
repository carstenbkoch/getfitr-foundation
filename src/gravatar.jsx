import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import md5 from "md5"
import { Avatar, Email } from "./index"

const Gravatar = props => {
    const [email, setEmail] = useState(props.email)
    const [src, setSrc] = useState(props.src)
    const setGravatarUrl = email => () => setSrc(`http://gravatar.com/avatar/${md5(email)}?s=200`)
    const setEmailVal = val => setEmail(val.target.value)

    return (
        <div className="react-gravatar">
            <h4>Avatar for:</h4>
            <Avatar email={email} src={src} />
            <Email fetchGravatar={setGravatarUrl} handleEmailChange={setEmailVal} email={email} />
        </div>
    )
}

Gravatar.propTypes = {
    email: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
}

Gravatar.defaultProps = {
    email: "test@example.com",
    src: "http://placehold.it/200x200",
}

export {
    Gravatar
}
