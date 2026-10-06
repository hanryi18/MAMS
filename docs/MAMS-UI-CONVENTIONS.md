# MAMS interface conventions

- A table row that has a detail page opens that detail page across its entire area, including text, number, and empty cell space. Use the shared DataTable `onRowOpen` callback. Do not add separate ID/text links.
- Provide row hover and pressed feedback, plus Enter/Space keyboard activation. Action menus remain independent of row navigation.
- Ticket rows open the corresponding ticket detail. Device inventory and monitoring rows open the corresponding device detail. Related ticket rows open ticket details. History rows have no detail destination.
- Number and action columns, including their headers, stay sticky at the left and right edges while scrolling horizontally.
- The top bar and current breadcrumb show the current page name, rather than the parent menu name. Keep the parent menu selected in the sidebar.
- Match labels to MAMS Figma: ticket details use “Detail Tiket”; device details use “Device Detail”. Use `terminalViewTitle` as the shared title mapping for terminal views.

- The shared MAMS top bar stays sticky at the top while the page scrolls. Keep its background opaque and its stacking order above page/table content, below dialogs and menus.

- Form fields follow Merchant Registration: 700px maximum content width, 40px input height, 8px radius, 4px label gap and 16px field spacing. Reuse reg-field/reg-input/reg-select classes and shared form width tokens. Add Device follows this reference; data and validation stay separate from visual styling.

- Editable text inputs, selects, textareas, and search/filter fields use a white surface (#fff), including focus/hover states. Disabled and read-only fields use #f9f9f9 and keep their existing non-editable behavior. Shared surface rules live in app/field-surfaces.css; preserve each component’s content, outline, dimensions, and focus indicators. Figma references: Input Field 105:2493 / 105:2721 and Select 1035:3524 / 1035:3608.

- Locked grey fields must be natively disabled, not merely read-only: no pointer interaction, text caret, or keyboard focus. Shared Input/Textarea map readOnly to disabled; controlled form state retains the displayed data when saving.

- Motion: shared page/detail entry 200ms; registration steps 200ms with Next/Back direction; clickable table rows transition 120ms with matching sticky-cell feedback; success dialogs 240ms and registration success mark 360ms. Animate navigation/step changes only, never keystrokes or filtered rows. Respect prefers-reduced-motion. Disabled fields stay inert.

- Summary cards across Dashboard, submissions, terminal management, and operations enter with a 420ms fade/8px rise and 160ms stagger (capped at 480ms). Table containers fade after the card sequence begins, without animating rows individually. Keep card keys stable so filters, pagination, and data updates do not restart entry motion. Reduced motion shows all content immediately.
