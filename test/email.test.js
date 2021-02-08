import React from 'react'
import { mount, shallow } from "enzyme"
import { Email } from '../src'

describe("Email", () => {
    it("should have an input for the email", () => {
        const email = mount(<Email/>)
        expect(email.find("input")).to.have.length(1)
    })
    
    it("should have a button", () => {
        const email = mount(<Email/>)
        expect(email.find("button")).to.have.length(1)
    })

    it("should have no default prop values for handleEmailChange and fetchGravatar", () => {
        const email = mount(<Email/>)
        expect(email.prop("handleEmailChange")).to.not.exist
        expect(email.prop("fetchGravatar")).to.not.exist
    })

    it("should have props for handleEmailChange and fetchGravatar defined", () => {
        const handleEmailChange = () => {}
        const fetchGravatar = () => {}
        const email = mount(<Email handleEmailChange={handleEmailChange} fetchGravatar={fetchGravatar} />)

        expect(email.prop("handleEmailChange")).to.equal(handleEmailChange)
        expect(email.prop("fetchGravatar")).to.equal(fetchGravatar)
    })

})
