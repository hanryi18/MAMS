export const NEW_NPWP="123135465496312341";
export const COMPANY_NPWP="1232454654564564";
export const PERSONAL_NPWP="615561489485156";
export const channelNames=["QRIS","Virtual Account","Card Payment","Keagenan/Mini ATM"];
export type Field={key:string;label:string;required?:boolean;type?:string;options?:string[];phone?:boolean;readOnly?:boolean};
export const merchantFields:Field[]=[
 {key:"merchant",label:"Nama Merchant",required:true},
 {key:"telephone",label:"Nomor Telepon",phone:true},
 {key:"mobile",label:"Nomor Handphone",phone:true},
 {key:"address",label:"Alamat Lengkap Merchant",required:true},
 {key:"location",label:"Titik Alamat Merchant",required:true,options:["Tangerang selatan, Serpong, 5321","Jakarta Selatan, Kebayoran Baru, 12120","Jakarta Pusat, Gambir, 10110"]},
 {key:"category",label:"Kategori Merchant",required:true,options:["1001 - Accounting, Auditing","5411 - Grocery Stores, Supermarkets","5812 - Eating Places, Restaurants","5999 - Miscellaneous Retail"]},
 {key:"size",label:"Ukuran Usaha Merchant",required:true,options:["(UME) Usaha Menengah : Omzet/Tahun Rp 2.5 M","(UMI) Usaha Mikro","(UKE) Usaha Kecil","(UBE) Usaha Besar"]}
];
export const ownerFields:Field[]=[{key:"position",label:"Jabatan"},{key:"owner",label:"Nama Lengkap"},{key:"ktp",label:"Nomor KTP"},{key:"ownerNpwp",label:"Nomor NPWP"},{key:"ownerMobile",label:"Nomor Handphone",phone:true},{key:"ownerEmail",label:"Email",type:"email"}];
export const companyFields:Field[]=[{key:"company",label:"Nama Perusahaan"},{key:"companyNpwp",label:"Nomor NPWP Perusahaan",readOnly:true},{key:"companyPhone",label:"Nomor Telepon Perusahaan",phone:true},{key:"companyEmail",label:"Email Perusahaan",type:"email"}];
export const agencyFields:Field[]=[{key:"agencyOutlet",label:"Outlet yang Diajukan",required:true,readOnly:true},{key:"agencyAddress",label:"Alamat Lengkap Outlet",required:true,readOnly:true},{key:"agencyProgram",label:"Program Keagenan",required:true,readOnly:true},{key:"branch",label:"Cabang/Unit Bank Pembina",options:["KC Jakarta Selatan","KC Tangerang","KC Jakarta Pusat"]}];
export const agencyMore:Field[]=[{key:"days",label:"Hari Operasional",options:["Senin–Sabtu","Senin–Jumat","Setiap Hari"]},{key:"cash",label:"Estimasi Kebutuhan Uang Tunai"},{key:"agencyAccount",label:"Rekening Operasional Agen",readOnly:true}];
export const agencyPic:Field[]=[{key:"agencyQuantity",label:"Jumlah Perangkat EDC",type:"number"},{key:"agencyPic",label:"Nama PIC Outlet untuk Pemasangan"},{key:"agencyPosition",label:"Jabatan"},{key:"agencyPhone",label:"Nomor Telepon PIC",phone:true}];
export const edcFields:Field[]=[{key:"installation",label:"Instalation Location",required:true},{key:"quantity",label:"Device Quantity",type:"number"},{key:"connectivity",label:"Connectivity",options:["4G","Wi-Fi","LAN"]},{key:"settlement",label:"Settlement Account",readOnly:true},{key:"pic",label:"Nama PIC Outlet untuk Pemasangan"},{key:"picPosition",label:"Jabatan"},{key:"picPhone",label:"Nomor Handphone",phone:true}];
export const documentLabels=["Upload Dokumen Pendukung","Upload Dokumen Pendukung","Upload Foto Area Usaha (Lingkungan Sekitar)","Upload Foto Area Usaha (Tampak Depan)","Upload Foto Area Usaha (Tampak Dalam)","NIB/SKU Lama","Perjanjian Kerja Sama Agen"];
export type DocumentItem={name:string;size:number;url?:string;sample?:boolean};
export type RegistrationState={npwp:string;result:null|"new"|"company"|"person";step:number;data:Record<string,string>;channels:string[];checks:Record<string,boolean>;docs:Record<string,DocumentItem>;accountChecked:boolean;error:string;success:boolean};
export function makeRegistration():RegistrationState{return {npwp:"",result:null,step:0,data:{merchant:"Indomaret",telephone:"",mobile:"",address:"KOMPLEK CILEDUK INDAH INDAH 2 BLOK DB16/12 RT. 01/08",location:merchantFields[4].options![0],category:merchantFields[5].options![0],size:merchantFields[6].options![0],merchantType:"Badan Usaha",position:"Direktur",owner:"John Doe",ktp:"15641135213486541",ownerNpwp:PERSONAL_NPWP,ownerMobile:"",ownerEmail:"Example@mail.com",company:"PT Maju Jaya Abadi",companyNpwp:"",companyPhone:"",companyEmail:"Example@mail.com",account:"1500000001165",accountOwner:"John Doe",bank:"Bank BCA",settlement:"1234********5678 (BCA)",existingQris:"Iya, Sudah Terdaftar",nmid:"ID21321321321321",qrisType:"Statis",vaPrefix:"Assigned automatically after approval",callback:"https://api.cantikapusat.com/va/callback",vaEmail:"Example@mail.com",branch:"KC Jakarta Selatan",agent:"Iya, Sudah Terdaftar",days:"Senin–Sabtu",cash:"20.000.000",agencyAccount:"1234********5678 (BCA)",agencyProgram:"Agen Bank / Mini ATM",agencyQuantity:"3",agencyPic:"John Doe",agencyPosition:"Store manager",agencyPhone:"",needsEdc:"Iya, Butuh EDC",installation:"",quantity:"3",connectivity:"4G",pic:"John Doe",picPosition:"Store manager",picPhone:""},channels:[...channelNames],checks:{vaDynamic:true,opMobile:true,opEdc:true,sameAddress:true},docs:Object.fromEntries([2,3,4,5,6].map(i=>[`doc${i}`,{name:"Document-Pendukung-21231",size:226000,url:"/assets/registration/sample-document.png",sample:true}])),accountChecked:true,error:"",success:false}}
export function lookupNpwp(value:string):RegistrationState["result"]{const n=value.replace(/\D/g,"");return n===COMPANY_NPWP?"company":n===PERSONAL_NPWP?"person":"new"}
export type RegistrationAction={type:"RESTORE";value:RegistrationState}|{type:"NPWP";value:string}|{type:"CHECK"}|{type:"START"}|{type:"STEP";step:number}|{type:"FIELD";key:string;value:string}|{type:"CHANNEL";value:string}|{type:"TOGGLE";key:string}|{type:"DOCUMENT";key:string;value:DocumentItem|null}|{type:"ACCOUNT";checked:boolean}|{type:"ERROR";value:string}|{type:"SEND"}|{type:"RESET"};
export function registrationReducer(s:RegistrationState,a:RegistrationAction):RegistrationState{switch(a.type){
 case "RESTORE":return {...a.value,success:false,error:""};
 case "RESET":return makeRegistration();
 case "NPWP":return {...s,npwp:a.value,result:null,error:""};
 case "CHECK":{const n=s.npwp.replace(/\D/g,"");if(!/^\d{15,18}$/.test(n))return {...s,error:"Masukkan NPWP berisi 15–18 digit untuk demo."};return {...s,npwp:n,result:lookupNpwp(n),error:""};}
 case "START":if(!s.result)return s;return {...s,step:1,data:{...s.data,merchantType:s.result==="person"?"Perorangan":"Badan Usaha",companyNpwp:s.npwp,companyPhone:s.result==="company"?"88-8880-8885":s.data.companyPhone,ownerMobile:s.result==="person"?"1255-4545-5555":s.data.ownerMobile,ownerNpwp:s.result==="person"?s.npwp:s.data.ownerNpwp},error:""};
 case "STEP":return {...s,step:Math.max(0,Math.min(4,a.step)),error:""};
 case "FIELD":return {...s,data:{...s.data,[a.key]:a.value},accountChecked:a.key==="account"?false:s.accountChecked,error:""};
 case "CHANNEL":return {...s,channels:s.channels.includes(a.value)?s.channels.filter(c=>c!==a.value):[...s.channels,a.value],error:""};
 case "TOGGLE":return {...s,checks:{...s.checks,[a.key]:!s.checks[a.key]}};
 case "DOCUMENT":{const docs={...s.docs};if(a.value)docs[a.key]=a.value;else delete docs[a.key];return {...s,docs,error:""};}
 case "ACCOUNT":return {...s,accountChecked:a.checked};
 case "ERROR":return {...s,error:a.value};
 case "SEND":return s.step===4?{...s,success:true,error:""}:s;
}}
