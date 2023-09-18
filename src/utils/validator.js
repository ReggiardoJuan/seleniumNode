import { assert } from 'chai';
import { validate } from 'jsonschema';

export const validateResponseSchema = async function (response, schema) {
    try {
        const validationResponse = validate(response, schema, {
            required: true,
            nestedErrors: true,
        });
        if (validationResponse.errors.length) {
            await parseSchemaErrors(validationResponse.errors);
        }
        return validationResponse.valid;
    } catch (error) {
        assert.fail('Error at validating schema:\n' + error);
    }
};

function parseSchemaErrors(errorMessages) {
    let errors = [];
    errorMessages.forEach((error) => {
        errors.push('\nSchema error: ' + error.stack);
    });
    assert.fail(errors);
}
