import React from "react"
import PropTypes from "prop-types"


const Email = ({ email, handleEmailChange, fetchGravatar }) => (
    <div className="form-group">
        <input onChange={handleEmailChange} className="form-control" style={{ width: 200 }} type="text" value={email} />
        <button onClick={fetchGravatar(email)} className="btn-success btn">Fetch</button>
    </div>
)

Email.propTypes = {
    handleEmailChange: PropTypes.func,
    fetchGravatar: PropTypes.func,
    email: PropTypes.string,
}

export {
    Email
}
