export const rules = {

    userName: [
        {
            required: true,
            message: 'Please input your username!',
        },
    ],
    moNumber: [
        {
            required: true,
            message: 'Please input your mobile Number!',
        },
        {
            pattern: /^[0-9]{10}$/,
            message: 'Please input your valid mobile Number!',
        }
    ],
    email: [
        {
            required: true,
            message: 'Please input your Email!',
        },
        {
            pattern: /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,3}$/,
            message: 'Please input Valid Email!'
        },
    ],
    password: [
        {
            required: true,
            message: 'Please input your password!',
        },
        {
            min: 8,
            message: 'Please input your valid Password!',
        },
    ],
}