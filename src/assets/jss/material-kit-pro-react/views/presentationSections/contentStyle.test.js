const contentStyle = require("./contentStyle")
// @ponicode
describe("contentStyle.default", () => {
    test("0", () => {
        let callFunction = () => {
            contentStyle.default("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            contentStyle.default("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            contentStyle.default("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            contentStyle.default("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            contentStyle.default("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            contentStyle.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
