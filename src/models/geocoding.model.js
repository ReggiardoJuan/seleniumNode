export const GeoCodeModel = {
    type: 'array',
    items: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
            },
            local_names: {
                type: 'object',
            },
            lat: {
                type: 'number',
            },
            lon: {
                type: 'number',
            },
            country: {
                type: 'string',
            },
            state: {
                type: 'string',
            },
        },
        required: ['name', 'lat', 'lon', 'country', 'state'],
    },
};
