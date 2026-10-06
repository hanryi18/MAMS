import type {TerminalRow} from './terminal-data';

// Extend demo fixtures at the data source, so detail pages and actions resolve every row.
export function expandDemoRows(rows:TerminalRow[], minimum=64):TerminalRow[]{
  if(!rows.length)return [];
  return Array.from({length:Math.max(minimum,rows.length)},(_,index)=>{
    const original=rows[index%rows.length];
    if(index<rows.length)return {...original};
    const number=index+1;
    return {...original,id:`${original.id}-DEMO-${number}`,
      ...(original.merchant?{merchant:`${original.merchant} · Demo ${number}`} : {}),
      ...(original.name?{name:`${original.name} · Demo ${number}`} : {})};
  });
}

export function requestedPage(value:string,total:number):number|null{
  if(!/^\d+$/.test(value.trim()))return null;
  const page=Number(value);
  return Number.isSafeInteger(page)&&page>=1&&page<=total?page:null;
}

export function paginationNumbers(current:number,total:number):(number|string)[]{
 const visible=Array.from({length:total},(_,i)=>i+1).filter(p=>p<=3||p===total||Math.abs(p-current)<2);
 return visible.flatMap((p,i)=>i>0&&p-visible[i-1]>1?["…",p]:[p]);
}
