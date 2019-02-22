const { check, validationResult } = require('express-validator/check');

// Validating Sign in Credentials
exports._sign_in_checks = [
    check('email').isEmail().exists(),
    check('password').isLength({min: 6}).exists()
];