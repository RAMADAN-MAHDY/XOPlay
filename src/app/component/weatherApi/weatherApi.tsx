import Image, { StaticImageData } from 'next/image';
import {data as Data} from './../typeing';
import Image_2 from '@/app/images/medium/2.png' 
import Image_3 from '@/app/images/medium/3.png' 
import Image_4 from '@/app/images/medium/4.png' 
import Image_5 from '@/app/images/medium/5.png' 
import Image_6 from '@/app/images/medium/6.png' 
import Image_7 from '@/app/images/medium/7.png' 
import Image_8 from '@/app/images/medium/8.png' 
import Image_9 from '@/app/images/medium/9.png' 
import Image_10 from '@/app/images/medium/10.png' 
import Image_11 from '@/app/images/medium/11.png' 


const WeatherApi = async () => {
  const res = await fetch(' https://www.meteosource.com/api/v1/free/point?place_id=cairo&sections=all&timezone=auto&language=en&units=metric&key=1ibda4xjr2h6kur9elwpbs5pjs2rbml96gajhwp0',{ next: { revalidate: 3600 } }) ;
  const data: Data = await res.json();
//   console.log(data.hourly.data[0].date)
  const { date ,temperature ,weather ,icon} = data.hourly.data[0];

// handle date
interface options {
    weekday: "long" | "short" | "narrow" | undefined;
    year: "numeric" | "2-digit" | undefined;
    month: "long" | "short" | "narrow" | "numeric" | "2-digit" | undefined;
    day: "numeric" | "2-digit" | undefined;
}

  const dates = new Date(date);
  const dateOptions:options = { weekday: 'long',  year: 'numeric', month: 'long', day: 'numeric' }
  const formateDate = dates.toLocaleDateString('ar-EG', dateOptions);

// handle icon static
interface image{
[key:string]:StaticImageData;
}
  const iconImages:image = {
    '2':Image_2,
    '3':Image_3,
    '4':Image_4,
    '5':Image_5,
    '6':Image_6,
    '7':Image_7,
    '8':Image_8,
    '9':Image_9,
    '10':Image_10,
    '11':Image_11
    
  }
  const iconToString =icon.toString()
//   console.log(iconImages)
//   console.log(iconToString)
  
  return (
    <>   
    <div className='text-[20px] font-[700] w-auto p-3 rounded-[30%] bg-[#b492b4]'>
        <p className='text-[#262c85]'>{data.timezone}</p>
    <img width={100} height={100}  src={`https://openweathermap.org/img/wn/0${iconToString}d@2x.png`} alt="weather icon"/>  
       <p className='pl-3'>{temperature} </p>   
    <p className="text-[#582121] font-[600] pb-3 pl-3">{weather}</p>
    </div>

    <p className='text-[25px] '>{formateDate}</p>
    </>
  )
}
export default WeatherApi;
