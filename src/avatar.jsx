import React from "react"
import PropTypes from "prop-types"


const Avatar = props => (
    <div className="avatar">
        <p>
            <em>{props.email}</em>
        </p>
        <img src={props.src} className="img-rounded" />
    </div>
)  

Avatar.propTypes = {
    email: PropTypes.string,
    src: PropTypes.string,
}

export { Avatar }
