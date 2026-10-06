"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  const viewport = React.useRef<HTMLDivElement>(null)
  const viewportId = React.useId()
  const [scroll, setScroll] = React.useState({ left: 0, max: 0, ratio: 1 })
  React.useEffect(() => {
    const node = viewport.current
    if (!node) return
    const measure = () => setScroll({
      left: node.scrollLeft,
      max: Math.max(0, node.scrollWidth - node.clientWidth),
      ratio: node.scrollWidth ? node.clientWidth / node.scrollWidth : 1,
    })
    const observer = new ResizeObserver(measure)
    observer.observe(node)
    if (node.firstElementChild) observer.observe(node.firstElementChild)
    node.addEventListener("scroll", measure, { passive: true })
    measure()
    return () => { observer.disconnect(); node.removeEventListener("scroll", measure) }
  }, [])
  const move = (left: number) => {
    if (viewport.current) viewport.current.scrollLeft = Math.max(0, Math.min(scroll.max, left))
  }
  return (
    <>
    <div
      ref={viewport}
      id={viewportId}
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
    {scroll.max > 1 && <div className="mams-table-scrollbar">
      <input
        type="range"
        role="scrollbar"
        aria-label="Geser tabel ke kiri atau kanan"
        aria-controls={viewportId}
        aria-orientation="horizontal"
        aria-valuemin={0}
        aria-valuemax={Math.ceil(scroll.max)}
        aria-valuenow={Math.round(scroll.left)}
        min={0}
        max={Math.ceil(scroll.max)}
        step={1}
        value={Math.round(scroll.left)}
        style={{ "--scroll-thumb-width": `${scroll.ratio * 100}%` } as React.CSSProperties}
        onChange={event => move(Number(event.target.value))}
        onKeyDown={event => {
          const node = viewport.current
          if (!node) return
          const targets: Record<string, number> = {
            ArrowLeft: scroll.left - 40, ArrowRight: scroll.left + 40,
            PageUp: scroll.left - node.clientWidth, PageDown: scroll.left + node.clientWidth,
            Home: 0, End: scroll.max,
          }
          if (event.key in targets) { event.preventDefault(); move(targets[event.key]) }
        }}
      />
    </div>}
    </>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
