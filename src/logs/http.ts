export const httpLogs = {
    Continue: {
        code: 100,
        message: 'Continue',
        type: 'Continue',
    },

    
    OK: { 
        code: 200,
        message: 'OK',
        type: 'OK'
    },
    Created: {
        code: 201,
        message: 'Created',
        type: 'Created',
    },
    Accepted: {
        code: 202,
        message: 'Accepted',
        type: 'Accepted'
    },


    MultipleChoices: {
        code: 300,
        message: 'Multiple Choices',
        type: 'MultipleChoices',
    },
    MovedPermanently: {
        code: 301,
        message: 'Moved Permanently',
        type: 'MovedPermanently',
    },
    TemporaryRedirect: {
        code: 307,
        message: 'Temporary Redirect',
        type: 'TemporaryRedirect',
    },
    PermanentRedirect: {
        code: 308,
        message: 'Permanent Redirect',
        type: 'PermanentRedirect',
    },


    BadRequest: { 
        code: 400,
        message: 'Bad Request',
        type: 'BadRequest'
    },
    Unauthorized: {
        code: 401,
        message: 'Unauthorized',
        type: 'Unauthorized'
    },
    PaymentRequired: {
        code: 402,
        message: 'Payment Required',
        type: 'PaymentRequired',
    },
    Forbidden: {
        code: 403,
        message: 'Forbidden',
        type: 'Forbidden'
    },
    NotFound: {
        code: 404,
        message: 'Not Found', 
        type: 'NotFound'
    },
    MethodNotAllowed: {
        code: 405,
        message: 'Method Not Allowed',
        type: 'MethodNotAllowed',
    },
    NotAcceptable: {
        code: 406,
        message: 'Not Acceptable',
        type: 'NotAcceptable',
    },
    ProxyAuthenticationRequired: {
        code: 407,
        message: 'Proxy Authentication Required',
        type: 'ProxyAuthenticationRequired',
    },
    RequestTimeout: {
        code: 408,
        message: 'Request Timeout',
        type: 'RequestTimeout',
    },
    Conflict: { code: 409, message: 'Conflict', type: 'Conflict' },
    Gone: { code: 410, message: 'Gone', type: 'Gone' },
    LengthRequired: {
        code: 411,
        message: 'Length Required',
        type: 'LengthRequired',
    },
    PreconditionFailed: {
        code: 412,
        message: 'Precondition Failed',
        type: 'PreconditionFailed',
    },
    PayloadTooLarge: {
        code: 413,
        message: 'Payload Too Large',
        type: 'PayloadTooLarge',
    },
    URITooLong: { code: 414, message: 'URI Too Long', type: 'URITooLong' },
    UnsupportedMediaType: {
        code: 415,
        message: 'Unsupported Media Type',
        type: 'UnsupportedMediaType',
    },
    MisdirectedRequest: {
        code: 421,
        message: 'Misdirected Request',
        type: 'MisdirectedRequest',
    },
    UnprocessableEntity: {
        code: 422,
        message: 'Unprocessable Entity',
        type: 'UnprocessableEntity',
    },
    Locked: { code: 423, message: 'Locked', type: 'Locked' },
    TooManyRequests: {
        code: 429,
        message: 'Too Many Requests',
        type: 'TooManyRequests',
    },


    InternalServerError: {
        code: 500,
        message: 'Internal Server Error',
        type: 'InternalServerError',
    },
    NotImplemented: {
        code: 501,
        message: 'Not Implemented',
        type: 'NotImplemented',
    },
    BadGateway: { code: 502, message: 'Bad Gateway', type: 'BadGateway' },
    ServiceUnavailable: {
        code: 503,
        message: 'Service Unavailable',
        type: 'ServiceUnavailable',
    },
    GatewayTimeout: {
        code: 504,
        message: 'Gateway Timeout',
        type: 'GatewayTimeout',
    },
    HTTPVersionNotSupported: {
        code: 505,
        message: 'HTTP Version Not Supported',
        type: 'HTTPVersionNotSupported',
    }
}
