import {expandDemoRows} from "./demo-pagination";
export type TerminalPage="tickets"|"inventory"|"monitoring";
export type TerminalRow=Record<string,string>;
export type TerminalColumn={key:string;label:string;width:number};
export const terminalExamples:Record<TerminalPage,{columns:TerminalColumn[];rows:TerminalRow[]}>={
  "tickets": {
    "columns": [
      {
        "key": "id",
        "label": "ID Tiket",
        "width": 140
      },
      {
        "key": "kind",
        "label": "Jenis Permintaan",
        "width": 140
      },
      {
        "key": "company",
        "label": "Nama Perusahaan",
        "width": 140
      },
      {
        "key": "merchant",
        "label": "Nama Merchant",
        "width": 140
      },
      {
        "key": "device",
        "label": "Perangkat",
        "width": 205
      },
      {
        "key": "reporter",
        "label": "Pelapor",
        "width": 170
      },
      {
        "key": "agent",
        "label": "Petugas",
        "width": 165
      },
      {
        "key": "date",
        "label": "Tanggal Tiket",
        "width": 155
      },
      {
        "key": "status",
        "label": "Status",
        "width": 185
      },
      {
        "key": "sla",
        "label": "SLA",
        "width": 114
      }
    ],
    "rows": [
      {
        "id": "TKT-260914-001",
        "kind": "Perbaikan",
        "company": "PT GOTO",
        "merchant": "Gojek",
        "device": "EDC-0012345678",
        "reporter": "Rina · Merchant",
        "agent": "Arif · Teknisi",
        "date": "14/09/2026",
        "status": "Dikerjakan",
        "sla": "23h 45m"
      },
      {
        "id": "TKT-260914-002",
        "kind": "Pemasangan",
        "company": "PT GOTO",
        "merchant": "Tokopedia",
        "device": "EDC · Belum dialokasikan",
        "reporter": "Dimas · Internal",
        "agent": "Belum ditugaskan",
        "date": "14/09/2026",
        "status": "Baru",
        "sla": "-"
      },
      {
        "id": "TKT-260914-003",
        "kind": "Pemeriksaan",
        "company": "PT GOTO",
        "merchant": "Gojek",
        "device": "EDC-0012345680",
        "reporter": "Ayu · Internal",
        "agent": "Dewi · Support",
        "date": "14/09/2026",
        "status": "Ditinjau",
        "sla": "1h 10m"
      },
      {
        "id": "TKT-260913-004",
        "kind": "Penggantian",
        "company": "PT GOTO",
        "merchant": "Gojek",
        "device": "EDC-0012345681",
        "reporter": "Budi · Merchant",
        "agent": "Bima · Teknisi",
        "date": "13/09/2026",
        "status": "Dikerjakan",
        "sla": "-"
      },
      {
        "id": "TKT-260913-005",
        "kind": "Penarikan",
        "company": "PT GOTO",
        "merchant": "Gojek",
        "device": "EDC-0012345682",
        "reporter": "Sari · Merchant",
        "agent": "Belum ditugaskan",
        "date": "13/09/2026",
        "status": "Baru",
        "sla": "-"
      },
      {
        "id": "TKT-260913-006",
        "kind": "Relokasi",
        "company": "PT GOTO",
        "merchant": "Gojek",
        "device": "EDC-0012345683",
        "reporter": "Dimas · Internal",
        "agent": "Arif · Teknisi",
        "date": "13/09/2026",
        "status": "Dijadwalkan",
        "sla": "21h 25m"
      },
      {
        "id": "TKT-260912-007",
        "kind": "Perbaikan",
        "company": "PT GOTO",
        "merchant": "Gojek",
        "device": "EDC-0012345684",
        "reporter": "Andi · Merchant",
        "agent": "Dewi · Support",
        "date": "12/09/2026",
        "status": "Menunggu Konfirmasi",
        "sla": "2h 40m"
      },
      {
        "id": "TKT-260912-008",
        "kind": "Pemasangan",
        "company": "PT GOTO",
        "merchant": "Gojek",
        "device": "EDC-0012345685",
        "reporter": "Rina · Internal",
        "agent": "Bima · Teknisi",
        "date": "12/09/2026",
        "status": "Ditutup",
        "sla": "-"
      }
    ]
  },
  "inventory": {
    "columns": [
      {
        "key": "id",
        "label": "Device ID",
        "width": 142
      },
      {
        "key": "type",
        "label": "Device Type",
        "width": 100
      },
      {
        "key": "serial",
        "label": "Serial Number",
        "width": 143
      },
      {
        "key": "tid",
        "label": "TID",
        "width": 143
      },
      {
        "key": "model",
        "label": "Model",
        "width": 142
      },
      {
        "key": "company",
        "label": "Nama Perusahaan",
        "width": 153
      },
      {
        "key": "merchant",
        "label": "Merchant",
        "width": 194
      },
      {
        "key": "status",
        "label": "Current Stage",
        "width": 117
      },
      {
        "key": "assigned",
        "label": "Assigned Date",
        "width": 138
      },
      {
        "key": "event",
        "label": "Latest Event",
        "width": 196
      }
    ],
    "rows": [
      {
        "id": "EDC-0012345678",
        "type": "EDC",
        "serial": "SN7894561230",
        "tid": "12312312312",
        "model": "Ingenico ICT250",
        "company": "Indomaret",
        "merchant": "Indomaret Alam Sutera",
        "status": "Active",
        "assigned": "12/01/2024",
        "event": "Installation Completed\n12/01/2024"
      },
      {
        "id": "EDC-0012345679",
        "type": "EDC",
        "serial": "SN7894561231",
        "tid": "12312312312",
        "model": "Ingenico ICT250",
        "company": "Alfamart",
        "merchant": "Alfamart BSD City",
        "status": "Active",
        "assigned": "11/01/2024",
        "event": "Returned to Inventory\n12/01/2024"
      },
      {
        "id": "EDC-0012345680",
        "type": "EDC",
        "serial": "SN7894561232",
        "tid": "12312312312",
        "model": "Verifone VX680",
        "company": "Circle K",
        "merchant": "Circle K Menteng",
        "status": "Active",
        "assigned": "10/01/2024",
        "event": "Signal Module Repair\n12/01/2024"
      },
      {
        "id": "EDC-0012345681",
        "type": "EDC",
        "serial": "SN7894561233",
        "tid": "12312312312",
        "model": "Ingenico Move/2500",
        "company": "Indomaret",
        "merchant": "Indomaret Kelapa Gading",
        "status": "Suspended",
        "assigned": "09/01/2024",
        "event": "Text\n12/01/2024"
      },
      {
        "id": "EDC-0012345682",
        "type": "EDC",
        "serial": "SN7894561234",
        "tid": "12312312312",
        "model": "Ingenico ICT250",
        "company": "Alfamidi",
        "merchant": "Alfamidi Depok",
        "status": "Active",
        "assigned": "09/01/2024",
        "event": "Signal Module Repair\n12/01/2024"
      },
      {
        "id": "EDC-0012345683",
        "type": "EDC",
        "serial": "SN7894561235",
        "tid": "12312312312",
        "model": "Verifone VX675",
        "company": "-",
        "merchant": "-",
        "status": "Available",
        "assigned": "-",
        "event": "Signal Module Repair\n12/01/2024"
      },
      {
        "id": "SDBX-0009876543",
        "type": "Soundbox",
        "serial": "SBX9876543210",
        "tid": "12312312312",
        "model": "SBX Pro",
        "company": "Indomaret",
        "merchant": "Indomaret Cikarang",
        "status": "Active",
        "assigned": "08/01/2024",
        "event": "Signal Module Repair\n12/01/2024"
      },
      {
        "id": "EDC-0012345684",
        "type": "EDC",
        "serial": "SN7894561236",
        "tid": "12312312312",
        "model": "Ingenico ICT250",
        "company": "-",
        "merchant": "-",
        "status": "Available",
        "assigned": "-",
        "event": "Signal Module Repair\n12/01/2024"
      }
    ]
  },
  "monitoring": {
    "columns": [
      {
        "key": "id",
        "label": "Device ID / TID",
        "width": 125
      },
      {
        "key": "merchant",
        "label": "Merchant / Outlet",
        "width": 140
      },
      {
        "key": "model",
        "label": "Device / Model",
        "width": 135
      },
      {
        "key": "connectivity",
        "label": "Connectivity",
        "width": 100
      },
      {
        "key": "heartbeat",
        "label": "Last Heartbeat",
        "width": 130
      },
      {
        "key": "signal",
        "label": "Signal / Battery",
        "width": 120
      },
      {
        "key": "health",
        "label": "Health Status",
        "width": 115
      },
      {
        "key": "error",
        "label": "Last Error",
        "width": 134
      }
    ],
    "rows": [
      {
        "id": "EDC-0012345678 · TID-90871234",
        "merchant": "Indomaret · Alam Sutera",
        "model": "EDC · Ingenico ICT250",
        "connectivity": "Online · 4G",
        "heartbeat": "09/09/2026 · 12:42:15",
        "signal": "85% · 72%",
        "health": "Healthy",
        "error": "-"
      },
      {
        "id": "EDC-0012345679 · TID-90871235",
        "merchant": "Alfamart · BSD City",
        "model": "EDC · Verifone VX680",
        "connectivity": "Online · WiFi",
        "heartbeat": "09/09/2026 · 12:41:08",
        "signal": "92% · 100%",
        "health": "Healthy",
        "error": "-"
      },
      {
        "id": "SDBX-0009876543 · TID-90871236",
        "merchant": "Circle K · Menteng",
        "model": "Soundbox · SBX Pro",
        "connectivity": "Online · 4G",
        "heartbeat": "09/09/2026 · 12:39:42",
        "signal": "74% · 68%",
        "health": "Warning",
        "error": "W014 · Signal Weak"
      },
      {
        "id": "EDC-0012345681 · TID-90871237",
        "merchant": "Indomaret · Kelapa Gading",
        "model": "EDC · Ingenico Move/2500",
        "connectivity": "Offline · 4G",
        "heartbeat": "09/09/2026 · 11:58:10",
        "signal": "0% · 42%",
        "health": "Critical",
        "error": "E102 · Host Timeout"
      },
      {
        "id": "SPOS-0003456789 · TID-90871238",
        "merchant": "Alfamidi · Depok",
        "model": "Smart POS · PAX A920",
        "connectivity": "Online · 4G",
        "heartbeat": "09/09/2026 · 12:40:55",
        "signal": "80% · 64%",
        "health": "Healthy",
        "error": "-"
      },
      {
        "id": "ATM-0007654321 · TID-90871239",
        "merchant": "CV Berkah Abadi · Bekasi",
        "model": "ATM · NCR SelfServ",
        "connectivity": "Online · LAN",
        "heartbeat": "09/09/2026 · 12:37:20",
        "signal": "100% · 100%",
        "health": "Warning",
        "error": "W208 · Cash Low"
      },
      {
        "id": "EDC-0012345684 · TID-90871240",
        "merchant": "Warung Kopi Kita · Bandung",
        "model": "EDC · Verifone VX675",
        "connectivity": "Offline · 3G",
        "heartbeat": "09/09/2026 · 10:15:04",
        "signal": "0% · 18%",
        "health": "Healthy",
        "error": "E301 · No Heartbeat"
      },
      {
        "id": "SDBX-0009876544 · TID-90871241",
        "merchant": "Alfamart · Bekasi",
        "model": "Soundbox · SBX Mini",
        "connectivity": "Online · WiFi",
        "heartbeat": "09/09/2026 · 12:42:01",
        "signal": "96% · 85%",
        "health": "Healthy",
        "error": "-"
      }
    ]
  }
};
export const pageTitles:Record<TerminalPage,string>={tickets:"Tiket Perangkat",inventory:"Device Inventory",monitoring:"Device Monitoring"};
export const initialTerminalRows=()=>Object.fromEntries(Object.entries(terminalExamples).map(([key,t])=>[key,expandDemoRows(t.rows)])) as Record<TerminalPage,TerminalRow[]>;
export function filterTerminalRows(rows:TerminalRow[],filters:Record<string,string>){return rows.filter(row=>Object.entries(filters).every(([key,value])=>{const v=value.trim().toLowerCase();if(!v)return true;return key==="ticket"?[row.id,row.device].some(x=>x?.toLowerCase().includes(v)):key==="all"?Object.values(row).some(x=>x.toLowerCase().includes(v)):(row[key]??"").toLowerCase().includes(v)}))}
export function terminalCsv(columns:TerminalColumn[],rows:TerminalRow[]){const q=(v:string)=>'"'+(/^[=+@-]/.test(v)?"'"+v:v).replaceAll('"','""')+'"';return '\uFEFF'+[columns.map(c=>q(c.label)).join(','),...rows.map(r=>columns.map(c=>q(r[c.key]??"")).join(','))].join('\r\n')}
export function assignTerminalDevice(row:TerminalRow,merchant:string,date:string):TerminalRow{return {...row,merchant,company:merchant.split(' ')[0],status:"Active",assigned:date,event:"Allocated to Merchant\n"+date}}

export function resolveTicketDevice(ticket:TerminalRow,inventory:TerminalRow[]):TerminalRow|null{const id=ticket.device?.trim();if(!id||id.includes("Belum dialokasikan"))return null;return inventory.find(row=>row.id===id)??{id,type:id.split("-")[0],serial:"-",tid:"-",model:ticket.model??"-",company:ticket.company??"-",merchant:ticket.merchant??"-",status:"Belum tersedia",assigned:"-",event:"-",vendor:"-",warranty:"-",expiry:"-",connectivity:"-",printer:"-",sim:"-",ip:"-",note:ticket.note??"-"}}

export function terminalViewTitle(page:TerminalPage,view:string){const titles:Record<string,string>={"ticket-detail":"Detail Tiket","device-detail":"Device Detail","device-add":"Tambah Device","device-assign":"Asign ke Merchant","ticket-add":"Buat Tiket Perangkat"};return titles[view]??pageTitles[page]}
