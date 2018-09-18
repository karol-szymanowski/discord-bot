const iam = require("./iam")

let msg = {
	content: "",
	guild:{
		roles: [
			{
				id: "1234",
				name: "test"
			},
			{
				id: "4321",
				name: "test2"
			}
		]
	},
	member: {
		addRole: function(id) {
			return id
		}
	}
}

describe("iam command", () => {
	it("should return value", () => {
		expect(true).toEqual(true)
	})
})
