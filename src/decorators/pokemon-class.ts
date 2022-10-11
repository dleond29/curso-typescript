function printToConsole(constructor: Function){
    console.log(constructor)
}

const printToConsoleConditional = (print: boolean = false): Function=>{
    if(print){
        return printToConsole;
    }else{
        return () =>{};
    }
}

const blockPrototype = function (constructor: Function){
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

function CheckValidPokemonId(){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value;
        descriptor.value = (id:number) =>{

            if(id<1 || id>800){
                return console.error('El id del pokemon debe estar entre 1 y 800')
            }else{
                return originalMethod(id)
            }

        }
        // descriptor.value = () => console.log('Hola mundo');
    }
}

function readOnly(isWritable: boolean=true): Function{
    return function(target: any, propertyKey: string){
        const descriptor: PropertyDescriptor = {
            get(){
                console.log(this)
                return 'Fernando'
            },
            set(this, val){
                // console.log(this, val)
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }

        }
        return descriptor;
    }
}


@blockPrototype
@printToConsoleConditional(false)
export class Pokemon{

    @readOnly(true)
    public publicApi: string = 'https://pokeapi.co'
    constructor(
        public name: string

    ){}

    @CheckValidPokemonId()
    savePokemonToDB( id: number){
        console.log(`Pokemon saved to database ${id}`);
    }
}
