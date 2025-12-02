---
name: "Export to Excel"
slug: "export-to-excel"
category: "SvN Tools"
subcategory: "Reporting"
icon: "📤"
date: "2025-12-01"
views: 0
description: "Exports schedules, parameters, and lookup tables from the model to Excel for reporting and batch editing. Preserves column mappings and formatting to streamline data hand-off and review."
raw: "https://example.com/export-to-excel.sh"
github: "https://github.com/example/export-to-excel"
---

## Export to Excel

This tool exports schedules, parameters and lookup tables from the model into an Excel workbook for reporting or bulk edits. Output preserves column mappings and adds a small manifest sheet that records parameter-to-column mappings.

Usage notes:

- Exports one or more schedules as separate sheets.
- Preserves parameter column headings; date/time and number formatting is retained where possible.
- Includes a `mapping` sheet describing which model parameter maps to which column.

Example columns produced for a `Doors` schedule:

| Mark | Type | Width | Height | Fire Rating | Comments |

After export you can edit values in Excel and re-import using the complementary `Import from Excel` tool.

#!/bin/bash
echo "Exporting schedules to Excel..."
