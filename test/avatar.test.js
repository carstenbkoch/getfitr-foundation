import React from 'react'
import { mount, shallow } from "enzyme"
import { Avatar } from '../src'

describe("Avatar", () => {
    it("should have an image to display the gravatar", () => {
        const avatar = mount(<Avatar/>)
        expect(avatar.find("img")).to.have.length(1)
    })

    it("should not have default props for email and src defined", () => {
        const avatar = mount(<Avatar/>)
        expect(avatar.prop("email")).to.be.undefined
        expect(avatar.prop("src")).to.be.undefined
    })

    it("should be able to handle props input for email and src", () => {
        const email = "example@getfitr.de"
        const src = "http://getfitr.de"
        const avatar = mount(<Avatar email={email} src={src} />)
        expect(avatar.prop("email")).to.equal(email)
        expect(avatar.prop("src")).to.equal(src)
    })

})
