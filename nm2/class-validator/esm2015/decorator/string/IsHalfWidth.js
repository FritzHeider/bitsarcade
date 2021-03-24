import { buildMessage, ValidateBy } from "../common/ValidateBy";
import validator from "validator";
export const IS_HALF_WIDTH = "isHalfWidth";
/**
 * Checks if the string contains any half-width chars.
 * If given value is not a string, then it returns false.
 */
export function isHalfWidth(value) {
    return typeof value === "string" && validator.isHalfWidth(value);
}
/**
 * Checks if the string contains any full-width chars.
 * If given value is not a string, then it returns false.
 */
export function IsHalfWidth(validationOptions) {
    return ValidateBy({
        name: IS_HALF_WIDTH,
        validator: {
            validate: (value, args) => isHalfWidth(value),
            defaultMessage: buildMessage((eachPrefix) => eachPrefix + "$property must contain a half-width characters", validationOptions)
        }
    }, validationOptions);
}

//# sourceMappingURL=IsHalfWidth.js.map
