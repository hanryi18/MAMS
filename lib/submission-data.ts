import {expandDemoRows} from "./demo-pagination";
import type {TerminalColumn,TerminalRow} from './terminal-data';
export type SubmissionPage='requests'|'checker'|'signer';
export const submissionTitles={requests:'Status Pengajuan',checker:'Task Checker',signer:'Task Signer'};
export const submissionColumns:TerminalColumn[]=[{key:'id',label:'ID Pengajuan',width:145},{key:'actor',label:'Diajukan Oleh',width:130},{key:'kind',label:'Jenis Pengajuan',width:135},{key:'merchantType',label:'Tipe Merchant',width:180},{key:'company',label:'Nama Perusahaan',width:180},{key:'merchant',label:'Merchant',width:180},{key:'channel',label:'Channel',width:70},{key:'date',label:'Tanggal Pengajuan',width:152},{key:'updated',label:'Update Terakhir',width:130},{key:'status',label:'Status Pengajuan',width:173}];
export function initialSubmissions():Record<SubmissionPage,TerminalRow[]>{
 const merchants=['Tokopedia','Kopi Pagi — Bintaro','Gojek','Sinar Jaya — Serpong','Roti Kita — Ciputat','Berkah — Tangerang','Maju Jaya — Jakarta','Warung Sari — Bogor'];
 const companies=['PT GOTO','-','PT GOTO','CV Sinar Jaya','-','CV Berkah Mandiri','PT Maju Jaya','-'];
 const statuses=['Draft','Menunggu Cheker','Menunggu Signer','Menunggu Revisi','Ditolak','Proses Aktivasi','Selesai','Menunggu Revisi'];
 const requests=expandDemoRows(merchants.map((merchant,i)=>{const day=i<3?'11':i<6?'10':'09',date=`${day}/09/2026`;return {id:`REQ-2609${day}-${String(i+1).padStart(3,'0')}`,actor:`${[2,3,6].includes(i)?'Dimas':'Rina'} • Inputter`,kind:[2,6].includes(i)?'Nonaktif channel':[1,4].includes(i)?'Merchant baru':'Aktivasi channel',merchantType:companies[i]==='-'?'Perorangan':'Badan Usaha',company:companies[i],merchant,channel:['QRIS','EDC','VA','VA','QRIS','EDC','EDC','QRIS'][i],date,updated:date,status:statuses[i]}}));
 return {requests,checker:requests.map(r=>({...r,status:'Menunggu Checker'})),signer:requests.map((r,i)=>({...r,id:r.id.slice(0,-3)+String(i+11).padStart(3,'0'),updated:'11/09/2026',status:'Menunggu Signer'}))};
}
export function filterSubmissions(rows:TerminalRow[],filters:Record<string,string>){return rows.filter(r=>(!filters.query||`${r.id} ${r.merchant}`.toLocaleLowerCase().includes(filters.query.trim().toLocaleLowerCase()))&&['kind','channel','date','status'].every(k=>!filters[k]||r[k]===filters[k]));}
export function decideSubmission(data:Record<SubmissionPage,TerminalRow[]>,id:string,status:string){const row=data.checker.find(r=>r.id===id);if(!row)return data;const updated={...row,status,updated:new Date().toLocaleDateString('en-GB')};return {requests:data.requests.map(r=>r.id===id?{...r,...updated}:r),checker:data.checker.filter(r=>r.id!==id),signer:status==='Menunggu Signer'?[updated,...data.signer.filter(r=>r.id!==id)]:data.signer};}
