import React from 'react'
import { mount, shallow } from "enzyme"
import { Gravatar } from '../src'
import md5 from "md5"

describe.only("Gravatar", () => {
    let gravatar

    beforeEach(() => {
        gravatar = mount(<Gravatar />) 
    })
    afterEach(() => {
        gravatar.unmount()
    })

    it("contains an <Avatar/> component", () => {
        expect(gravatar.find("Avatar")).to.have.length(1)
    })
    
    it("contains an <Email/> component", () => {
        expect(gravatar.find("Email")).to.have.length(1)
    })
    
    it("should have an initial email state", () => {
        expect(gravatar.prop("email")).to.equal("test@example.com")
    })

    it("should have an initial src state", () => {
        expect(gravatar.prop("src")).to.equal("http://placehold.it/200x200")
    })

    it("should have required fields to change Email address", () => {
        expect(gravatar.find("Email")).to.have.length(1)
        expect(gravatar.find("input")).to.have.length(1)
    })

    it("should update the src state on clicking fetch", () => {
        const email = "carsten@cabcookie.de"
        gravatar.find("input").simulate("change", { target: { value: email }})
        gravatar.find("button").simulate("click")

        expect(gravatar.find("Email").prop("email")).to.equal(email)
        expect(gravatar.find("img").prop("src")).to.equal(`http://gravatar.com/avatar/${md5(email)}?s=200`)
    })
})
