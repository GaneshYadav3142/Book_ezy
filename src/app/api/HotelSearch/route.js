import { NextResponse } from "next/server";

const  Amadeus = require("amadeus");

const amadeus = new Amadeus({
    clientId: 'pOlvnRqidfb64sgRyVTqHjChc86T5TP9',
    clientSecret: 'YVaAXsa2WMWkRKo6'
  });

  export async function GET(request){
    

    const response = await  amadeus.referenceData.locations.hotels.byCity.get({
        cityCode: 'BOM'
      })
    
       return NextResponse.json(response.data)
  }

