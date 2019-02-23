const { check, validationResult } = require('express-validator/check');

// Validating Sign in Credentials
exports._sign_in_checks = [
    check('email').isEmail().exists(),
    check('password').isLength({min: 6}).exists()
];

exports._register_checks = [
    check('email').isEmail().exists(),
    check('password').isLength({min: 6}).exists(),
    check('full_name').isAlpha().exists(),
    check('phone_number').isNumeric().isLength({min: 9}).exists()
];