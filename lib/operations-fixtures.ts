import type {TerminalColumn,TerminalRow} from "./terminal-data";
export type OperationPage="fees"|"reconciliation"|"settlements"|"ota"|"fraud";
export type OperationFixture={summary:string[][];heading:string[];columns:TerminalColumn[];rows:TerminalRow[]};
export const operationFixtures:Record<OperationPage,OperationFixture>={
  "fees": {
    "summary": [
      [
        "Total Skema",
        "8",
        "Seluruh skema fee"
      ],
      [
        "Aktif",
        "5",
        "Sedang berlaku"
      ],
      [
        "Terjadwal",
        "2",
        "Akan berlaku"
      ],
      [
        "Kadaluarsa",
        "1",
        "Tidak berlaku"
      ]
    ],
    "heading": [
      "Daftar Skema MDR & Fee",
      "Kelola skema fee berdasarkan channel, segmen merchant, nilai fee, dan periode berlaku."
    ],
    "columns": [
      {
        "key": "name",
        "label": "Nama Skema",
        "width": 190
      },
      {
        "key": "channel",
        "label": "Channel",
        "width": 161.8
      },
      {
        "key": "feeKind",
        "label": "Jenis Fee",
        "width": 161.8
      },
      {
        "key": "value",
        "label": "Nilai Fee",
        "width": 161.8
      },
      {
        "key": "effective",
        "label": "Effective Date",
        "width": 161.8
      },
      {
        "key": "status",
        "label": "Status",
        "width": 161.8
      }
    ],
    "rows": [
      {
        "name": "QRIS - Micro 2026",
        "channel": "QRIS",
        "feeKind": "MDR",
        "value": "0.30%",
        "effective": "01 Jan 2026",
        "status": "Aktif",
        "id": "FEE-DEMO-001"
      },
      {
        "name": "QRIS - Regular 2026",
        "channel": "QRIS",
        "feeKind": "MDR",
        "value": "0.70%",
        "effective": "01 Jan 2026",
        "status": "Aktif",
        "id": "FEE-DEMO-002"
      },
      {
        "name": "VA - Corporate",
        "channel": "VA",
        "feeKind": "Flat Fee",
        "value": "Rp 4.000",
        "effective": "01 Feb 2026",
        "status": "Aktif",
        "id": "FEE-DEMO-003"
      },
      {
        "name": "EDC - Retail",
        "channel": "EDC",
        "feeKind": "MDR",
        "value": "1.50%",
        "effective": "01 Jan 2026",
        "status": "Aktif",
        "id": "FEE-DEMO-004"
      },
      {
        "name": "Card - Premium",
        "channel": "Card",
        "feeKind": "Interchange + MDR",
        "value": "1.80%",
        "effective": "01 Mar 2026",
        "status": "Terjadwal",
        "id": "FEE-DEMO-005"
      },
      {
        "name": "EDC - Government",
        "channel": "EDC",
        "feeKind": "MDR",
        "value": "0.50%",
        "effective": "01 Jan 2026",
        "status": "Aktif",
        "id": "FEE-DEMO-006"
      },
      {
        "name": "QRIS - Promo UMKM",
        "channel": "QRIS",
        "feeKind": "MDR",
        "value": "0.00%",
        "effective": "01 Dec 2025",
        "status": "Terjadwal",
        "id": "FEE-DEMO-007"
      },
      {
        "name": "VA - Retail (Old)",
        "channel": "VA",
        "feeKind": "Flat Fee",
        "value": "Rp 5.000",
        "effective": "01 Jan 2024",
        "status": "Kadaluarsa",
        "id": "FEE-DEMO-008"
      }
    ]
  },
  "reconciliation": {
    "summary": [
      [
        "Total Transactions",
        "1.245.320",
        "↑ 12%   vs previous period"
      ],
      [
        "Matched",
        "1.198.450",
        "96.2% dari total"
      ],
      [
        "Unmatched",
        "46.870",
        "3.8% dari total"
      ],
      [
        "Discrepancy Amount",
        "IDR 512.430.000",
        "↑ 8%   vs previous period"
      ]
    ],
    "heading": [
      "Recent Reconciliation Exceptions",
      "List of latest unmatched transactions requiring investigation."
    ],
    "columns": [
      {
        "key": "id",
        "label": "Recon ID",
        "width": 145
      },
      {
        "key": "transaction",
        "label": "Transaction ID",
        "width": 145
      },
      {
        "key": "channel",
        "label": "Channel",
        "width": 85
      },
      {
        "key": "merchant",
        "label": "Merchant",
        "width": 180
      },
      {
        "key": "scheme",
        "label": "Scheme Amount",
        "width": 125
      },
      {
        "key": "mams",
        "label": "MAMS Amount",
        "width": 115
      },
      {
        "key": "host",
        "label": "Bank Host Amount",
        "width": 135
      },
      {
        "key": "exception",
        "label": "Exception Type",
        "width": 155
      },
      {
        "key": "status",
        "label": "Status",
        "width": 125
      },
      {
        "key": "analyst",
        "label": "Analyst",
        "width": 130
      },
      {
        "key": "created",
        "label": "Created At",
        "width": 150
      }
    ],
    "rows": [
      {
        "id": "RCN-20240506-0012",
        "transaction": "TRX240506000123",
        "channel": "QRIS",
        "merchant": "Indomaret · Alam Sutera",
        "scheme": "IDR 150.000",
        "mams": "IDR 150.000",
        "host": "IDR 0",
        "exception": "Missing Host Record",
        "status": "Open",
        "analyst": "Budi Santoso",
        "created": "06/05/2024 14:23"
      },
      {
        "id": "RCN-20240506-0013",
        "transaction": "TRX240506000124",
        "channel": "EDC",
        "merchant": "Alfamart · BSD City",
        "scheme": "IDR 250.000",
        "mams": "IDR 245.000",
        "host": "IDR 250.000",
        "exception": "Amount Mismatch",
        "status": "Investigating",
        "analyst": "Sari Dewi",
        "created": "06/05/2024 13:10"
      },
      {
        "id": "RCN-20240506-0014",
        "transaction": "TRX240506000125",
        "channel": "VA",
        "merchant": "Circle K · Menteng",
        "scheme": "IDR 500.000",
        "mams": "IDR 500.000",
        "host": "IDR 0",
        "exception": "Missing Host Record",
        "status": "Open",
        "analyst": "Andi Pratama",
        "created": "06/05/2024 12:42"
      },
      {
        "id": "RCN-20240506-0015",
        "transaction": "TRX240506000126",
        "channel": "Card",
        "merchant": "Starbucks · Grand Indo",
        "scheme": "IDR 125.000",
        "mams": "IDR 120.000",
        "host": "IDR 125.000",
        "exception": "Amount Mismatch",
        "status": "Under Review",
        "analyst": "Rina Melati",
        "created": "06/05/2024 11:18"
      },
      {
        "id": "RCN-20240506-0016",
        "transaction": "TRX240506000127",
        "channel": "QRIS",
        "merchant": "Alfamidi · Depok",
        "scheme": "IDR 75.000",
        "mams": "IDR 75.000",
        "host": "IDR 0",
        "exception": "Missing Host Record",
        "status": "Open",
        "analyst": "Dedi Kurniawan",
        "created": "06/05/2024 10:05"
      },
      {
        "id": "RCN-20240506-0017",
        "transaction": "TRX240506000128",
        "channel": "EDC",
        "merchant": "Kopi Kenangan · Bekasi",
        "scheme": "IDR 300.000",
        "mams": "IDR 297.000",
        "host": "IDR 300.000",
        "exception": "Amount Mismatch",
        "status": "Investigating",
        "analyst": "Sari Dewi",
        "created": "06/05/2024 09:47"
      },
      {
        "id": "RCN-20240506-0018",
        "transaction": "TRX240506000129",
        "channel": "VA",
        "merchant": "Hypermart · Karawaci",
        "scheme": "IDR 1.000.000",
        "mams": "IDR 0",
        "host": "IDR 1.000.000",
        "exception": "Missing MAMS Record",
        "status": "Open",
        "analyst": "Budi Santoso",
        "created": "06/05/2024 09:21"
      },
      {
        "id": "RCN-20240506-0019",
        "transaction": "TRX240506000130",
        "channel": "Card",
        "merchant": "MCD · Pondok Indah",
        "scheme": "IDR 85.000",
        "mams": "IDR 85.000",
        "host": "IDR 85.000",
        "exception": "Duplicate Record",
        "status": "Resolved",
        "analyst": "Rina Melati",
        "created": "06/05/2024 08:50"
      }
    ]
  },
  "settlements": {
    "summary": [
      [
        "Total Gross Settlement",
        "Rp 12.8 B",
        "↑ +12.5%\nvs. previous period"
      ],
      [
        "Total Net Settlement",
        "Rp 12.1 B",
        "↑ +11.8%\nvs. previous period"
      ],
      [
        "Pending Payouts",
        "124",
        "↑ +6.3%\nvs. previous period"
      ],
      [
        "Failed Payouts",
        "8",
        "↓ -27.3%\nvs. previous period"
      ]
    ],
    "heading": [
      "Settlement List",
      "View and monitor settlement records, including gross amount, fees, net payout, and payout status."
    ],
    "columns": [
      {
        "key": "id",
        "label": "Settlement ID",
        "width": 152.5
      },
      {
        "key": "merchant",
        "label": "Merchant / Outlet",
        "width": 152.5
      },
      {
        "key": "channel",
        "label": "Channel",
        "width": 152.5
      },
      {
        "key": "gross",
        "label": "Gross Amount",
        "width": 152.5
      },
      {
        "key": "fee",
        "label": "MDR / Fee",
        "width": 166
      },
      {
        "key": "net",
        "label": "Net Amount",
        "width": 125
      },
      {
        "key": "frequency",
        "label": "Frequency",
        "width": 90
      },
      {
        "key": "date",
        "label": "Settlement Date",
        "width": 152.5
      },
      {
        "key": "status",
        "label": "Status",
        "width": 152.5
      },
      {
        "key": "event",
        "label": "Latest Event",
        "width": 190
      }
    ],
    "rows": [
      {
        "id": "STL-20250430-0001",
        "merchant": "Indomaret\nIndomaret Sudirman",
        "channel": "QRIS",
        "gross": "Rp 245,320,000",
        "fee": "Rp 4,906,400 (2.00%)",
        "net": "Rp 240,413,600",
        "frequency": "H+1",
        "date": "30 Apr 2025 14:30",
        "status": "Scheduled",
        "event": "Payout Generated"
      },
      {
        "id": "STL-20250430-0002",
        "merchant": "Alfamart\nAlfamart Melawai",
        "channel": "EDC",
        "gross": "Rp 512,650,000",
        "fee": "Rp 10,253,000\n(2.00%)",
        "net": "Rp 502,397,000",
        "frequency": "H+0",
        "date": "30 Apr 2025\n12:15",
        "status": "Processing",
        "event": "Awaiting Cut-off"
      },
      {
        "id": "STL-20250429-0045",
        "merchant": "Circle K\nCircle K Gatot Subroto",
        "channel": "VA",
        "gross": "Rp 178,900,000",
        "fee": "Rp 3,578,000\n(2.00%)",
        "net": "Rp 175,322,000",
        "frequency": "Realtime",
        "date": "29 Apr 2025\n20:10",
        "status": "Paid",
        "event": "Paid to Merchant"
      },
      {
        "id": "STL-20250429-0044",
        "merchant": "Alfamidi\nAlfamidi Kuningan",
        "channel": "Soundbox",
        "gross": "Rp 98,450,000",
        "fee": "Rp 1,969,000\n(2.00%)",
        "net": "Rp 96,481,000",
        "frequency": "H+1",
        "date": "29 Apr 2025\n18:45",
        "status": "Failed",
        "event": "Host Response Failed"
      },
      {
        "id": "STL-20250429-0043",
        "merchant": "Warung Kopi Kita\nKopi Kita Blok M",
        "channel": "QRIS",
        "gross": "Rp 12,320,000",
        "fee": "Rp 246,400\n(2.00%)",
        "net": "Rp 12,073,600",
        "frequency": "Realtime",
        "date": "29 Apr 2025\n16:20",
        "status": "Pending Review",
        "event": "Awaiting Verification"
      },
      {
        "id": "STL-20250428-0038",
        "merchant": "Indomaret\nIndomaret Thamrin",
        "channel": "EDC",
        "gross": "Rp 301,770,000",
        "fee": "Rp 6,035,400\n(2.00%)",
        "net": "Rp 295,734,600",
        "frequency": "H+0",
        "date": "28 Apr 2025\n21:10",
        "status": "Paid",
        "event": "Paid to Merchant"
      },
      {
        "id": "STL-20250428-0037",
        "merchant": "Alfamart\nAlfamart Senayan",
        "channel": "QRIS",
        "gross": "Rp 87,560,000",
        "fee": "Rp 1,751,200\n(2.00%)",
        "net": "Rp 85,808,800",
        "frequency": "Manual",
        "date": "28 Apr 2025\n11:05",
        "status": "Paid",
        "event": "Payout Generated"
      },
      {
        "id": "STL-20250427-0031",
        "merchant": "Circle K\nCircle K Pondok Indah",
        "channel": "Soundbox",
        "gross": "Rp 66,420,000",
        "fee": "Rp 1,328,400\n(2.00%)",
        "net": "Rp 65,091,600",
        "frequency": "H+1",
        "date": "27 Apr 2025\n09:40",
        "status": "Processing",
        "event": "Awaiting Cut-off"
      }
    ]
  },
  "ota": {
    "summary": [
      [
        "Total Devices",
        "12.480",
        "↑ 2% from last month"
      ],
      [
        "Up to Date",
        "10.234",
        "82%"
      ],
      [
        "Pending Update",
        "1.256",
        "10%"
      ],
      [
        "Update Failed",
        "312",
        "2.5%"
      ]
    ],
    "heading": [
      "OTA Campaign List (12)",
      "Manage and monitor application and firmware update campaigns for EDC devices."
    ],
    "columns": [
      {
        "key": "id",
        "label": "Campaign ID",
        "width": 145
      },
      {
        "key": "name",
        "label": "Campaign Name",
        "width": 255
      },
      {
        "key": "version",
        "label": "Version",
        "width": 90
      },
      {
        "key": "model",
        "label": "Device Model",
        "width": 150
      },
      {
        "key": "target",
        "label": "Target Devices",
        "width": 105
      },
      {
        "key": "schedule",
        "label": "Schedule",
        "width": 157.5
      },
      {
        "key": "progress",
        "label": "Progress",
        "width": 155
      },
      {
        "key": "status",
        "label": "Status",
        "width": 125
      },
      {
        "key": "actor",
        "label": "Created By",
        "width": 120
      },
      {
        "key": "created",
        "label": "Created At",
        "width": 157.5
      }
    ],
    "rows": [
      {
        "id": "OTA-20260925-001",
        "name": "Firmware v2.4.1 Security Patch",
        "version": "v2.4.1",
        "model": "Verifone VX680",
        "target": "1.250",
        "schedule": "25 Sep 2026\n23:00",
        "progress": "94%\n1.180 / 1.250",
        "status": "In Progress",
        "actor": "Dimas Arifin",
        "created": "25 Sep 2026 10:12"
      },
      {
        "id": "OTA-20260920-002",
        "name": "App v3.1.0 Feature Update",
        "version": "v3.1.0",
        "model": "Ingenico Move/2500",
        "target": "850",
        "schedule": "20 Sep 2026\n23:00",
        "progress": "100%\n850 / 850",
        "status": "Completed",
        "actor": "Rina Sari",
        "created": "20 Sep 2026\n09:30"
      },
      {
        "id": "OTA-20260918-003",
        "name": "Firmware v2.3.5 Bug Fix",
        "version": "v2.3.5",
        "model": "Verifone VX520",
        "target": "620",
        "schedule": "18 Sep 2026\n22:00",
        "progress": "100%\n620 / 620",
        "status": "Completed",
        "actor": "Budi Santoso",
        "created": "18 Sep 2026\n11:45"
      },
      {
        "id": "OTA-20260915-004",
        "name": "App v3.0.2",
        "version": "v3.0.2",
        "model": "PAX A920",
        "target": "980",
        "schedule": "15 Sep 2026\n23:00",
        "progress": "100%\n980 / 980",
        "status": "Completed",
        "actor": "Dimas Arifin",
        "created": "15 Sep 2026\n14:20"
      },
      {
        "id": "OTA-20260910-005",
        "name": "Firmware v2.4.0",
        "version": "v2.4.0",
        "model": "Ingenico Desk/3500",
        "target": "1.100",
        "schedule": "10 Sep 2026\n22:00",
        "progress": "100%\n1.100 / 1.100",
        "status": "Completed",
        "actor": "Rina Sari",
        "created": "10 Sep 2026\n09:15"
      },
      {
        "id": "OTA-20260905-006",
        "name": "App v2.9.8",
        "version": "v2.9.8",
        "model": "Sunmi P2",
        "target": "650",
        "schedule": "05 Sep 2026\n23:00",
        "progress": "48%\n312 / 650",
        "status": "Failed",
        "actor": "Andi Pratama",
        "created": "05 Sep 2026\n10:30"
      },
      {
        "id": "OTA-20260901-007",
        "name": "Firmware v2.3.0",
        "version": "v2.3.0",
        "model": "PAX A920",
        "target": "720",
        "schedule": "01 Sep 2026\n22:00",
        "progress": "100%\n720 / 720",
        "status": "Completed",
        "actor": "Budi Santoso",
        "created": "01 Sep 2026\n13:40"
      },
      {
        "id": "OTA-20260828-008",
        "name": "App v2.9.7",
        "version": "v2.9.7",
        "model": "Verifone VX680",
        "target": "540",
        "schedule": "28 Aug 2026\n22:00",
        "progress": "100%\n540 / 540",
        "status": "Completed",
        "actor": "Rina Sari",
        "created": "28 Aug 2026\n16:05"
      }
    ]
  },
  "fraud": {
    "summary": [
      [
        "Total Alerts Today",
        "248",
        "↑ 12.7% dari kemarin"
      ],
      [
        "Critical Alerts",
        "32",
        "↑ 33.3% dari kemarin"
      ],
      [
        "Under Investigation",
        "76",
        "↓ 8.4% dari kemarin"
      ],
      [
        "Closed Today",
        "140",
        "↑ 18.6% dari kemarin"
      ]
    ],
    "heading": [
      "Recent Fraud Alerts",
      "Monitor and investigate the latest fraud alerts across merchant acquiring channels."
    ],
    "columns": [
      {
        "key": "id",
        "label": "Alert ID",
        "width": 170
      },
      {
        "key": "merchant",
        "label": "Merchant",
        "width": 215
      },
      {
        "key": "channel",
        "label": "Channel",
        "width": 105
      },
      {
        "key": "rule",
        "label": "Rule Triggered",
        "width": 245
      },
      {
        "key": "severity",
        "label": "Severity",
        "width": 120
      },
      {
        "key": "status",
        "label": "Status",
        "width": 180
      },
      {
        "key": "created",
        "label": "Created At",
        "width": 200
      },
      {
        "key": "assignee",
        "label": "Assignee",
        "width": 145
      }
    ],
    "rows": [
      {
        "id": "FRA-202506190001",
        "merchant": "Indomaret Alam Sutera",
        "channel": "EDC",
        "rule": "High Transaction Velocity",
        "severity": "Critical",
        "status": "Under Investigation",
        "created": "19/06/2026 10:15:36",
        "assignee": "Budi Santoso"
      },
      {
        "id": "FRA-202506190002",
        "merchant": "Alfamart BSD City",
        "channel": "QRIS",
        "rule": "Amount Spike",
        "severity": "High",
        "status": "Open",
        "created": "19/06/2026 09:42:18",
        "assignee": "Siti Rahma"
      },
      {
        "id": "FRA-202506190003",
        "merchant": "Circle K Menteng",
        "channel": "VA",
        "rule": "Repeated Decline",
        "severity": "Medium",
        "status": "Under Investigation",
        "created": "19/06/2026 08:37:21",
        "assignee": "Andi Pratama"
      },
      {
        "id": "FRA-202506190004",
        "merchant": "Indomaret Kelapa Gading",
        "channel": "Soundbox",
        "rule": "Multiple Device Usage",
        "severity": "Critical",
        "status": "Open",
        "created": "19/06/2026 08:12:05",
        "assignee": "Rina Wijaya"
      },
      {
        "id": "FRA-202506180015",
        "merchant": "Alfamidi Depok",
        "channel": "QRIS",
        "rule": "Unusual Location",
        "severity": "High",
        "status": "Closed",
        "created": "18/06/2026 22:41:33",
        "assignee": "Dimas Arif"
      },
      {
        "id": "FRA-202506180014",
        "merchant": "Circle K Sunter",
        "channel": "EDC",
        "rule": "Amount Spike",
        "severity": "Medium",
        "status": "Closed",
        "created": "18/06/2026 20:17:08",
        "assignee": "Maya Sari"
      },
      {
        "id": "FRA-202506180013",
        "merchant": "Indomaret Cikarang",
        "channel": "EDC",
        "rule": "Repeated Decline",
        "severity": "Low",
        "status": "Closed",
        "created": "18/06/2026 19:05:46",
        "assignee": "Budi Santoso"
      },
      {
        "id": "FRA-202506180012",
        "merchant": "Alfamart Bekasi",
        "channel": "Soundbox",
        "rule": "High Transaction Velocity",
        "severity": "High",
        "status": "Under Investigation",
        "created": "18/06/2026 17:28:21",
        "assignee": "Siti Rahma"
      }
    ]
  }
};
