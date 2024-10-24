export interface data  {
    timezone:string,
hourly:{
    data:Array<{
        date:string,
        weather:string,
        icon:number,
        summary:string,
        temperature:number,

    }
    >
}
}