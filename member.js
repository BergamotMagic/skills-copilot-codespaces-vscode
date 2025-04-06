function skillsMember() {
    return {
        name: "skillsMember",
        description: "Skills member",
        type: "object",
        properties: {
            id: {
                type: "string",
                description: "The unique identifier for the member.",
            },
            name: {
                type: "string",
                description: "The name of the member.",
            },
            email: {
                type: "string",
                description: "The email address of the member.",
            },
            phoneNumber: {
                type: "string",
                description: "The phone number of the member.",
            },
            skills: {
                type: "array",
                items: {
                    type: "string",
                    description: "A skill that the member possesses.",
                },
            },
        },
    };
}