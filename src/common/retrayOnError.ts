async function attempt(this: any, fn: () => any, args: any, maxAttempts: number){
    return await fn.apply(this, args).catch((e:Error)=>{
        if (--maxAttempts < 0) throw new Error(e.message);
        else {
            console.warn('got error: ' + e.message + '')
            console.warn('try to attempt one more time...')
        }
        return attempt.apply(this, [fn, args, maxAttempts]);
    })
}


export default function reTrayOnError(count = 1) {
    return function (...[,,descriptor]:[any,any,PropertyDescriptor]) {
        const originalFn = descriptor.value;
        descriptor.value = async function(...args: any[]) {
            return await attempt.apply(this, [originalFn, args, count]);
        };
        return descriptor;
    };
}
