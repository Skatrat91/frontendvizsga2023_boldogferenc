export class Plushie{
    name:string = '';
    size:number = 0;
    
    constructor(){
        if(this.name.length < 1 ){
            this.name = '';
            throw new Error('Name field cannot be blank.')
        }

        if(this.size < 0){
            this.size = 0;
            throw new Error('Size cannot be minus.')
        }

    }
}
