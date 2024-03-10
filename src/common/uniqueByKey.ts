export default function uniqueByKey(key:string = 'id') {
    return function (...[,,descriptor]:[any,any,PropertyDescriptor]) {
        const originalFn = descriptor.value;
        descriptor.value = async function(...args: any[]) {
            let array = await originalFn.apply(this, args);
            return [...array.reduce((a:any,c:any) =>
            {
              a.set(c.id, c);
              return a;
            },
              new Map()).values()
            ];
        };
        return descriptor;
    };
}