import crypto from 'crypto';


const bytes = crypto.randomBytes(parseInt(Bun.argv[2]));

console.log({
    bytes: bytes,
    hex: bytes.toString('hex')
})
