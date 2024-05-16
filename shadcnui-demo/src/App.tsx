import "./global.css"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { SearchIcon } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const columns: ColumnDef<{id: number, name: string}>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Name" },
]

function App() {
  const table = useReactTable({
    data: [{id: 1, name: "Item 1"}, {id: 2, name: "Item 2"}, {id: 3, name: "Item 3"}],
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  })
  
  return (
    <div className="flex flex-col items-start p-4 gap-4">
      <div>
        <Label htmlFor="text-field">Input</Label>
        <Input id="text-field" />
      </div>

      <div>
        <Label htmlFor="select">Select</Label>
        <Select>
          <SelectTrigger id="select">
            <SelectValue  />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Option1">Option 1</SelectItem>
            <SelectItem value="Option2">Option 2</SelectItem>
            <SelectItem value="Option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Radio</Label>
        <RadioGroup>
          <div>
            <RadioGroupItem value="Option1" id="Option1" />
            <Label htmlFor="Option1">Option 1</Label>
          </div>
          <div>
            <RadioGroupItem value="Option2" id="Option2" />
            <Label htmlFor="Option2">Option 2</Label>
          </div>
          <div>
            <RadioGroupItem value="Option3" id="Option3" />
            <Label htmlFor="Option3">Option 3</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Checkbox id="checkbox" />
        <Label htmlFor="checkbox">Checkbox</Label>
      </div>

      <Button variant={"default"}>Button</Button>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <SearchIcon />

      <Alert variant={"default"}>
        <AlertDescription>Message</AlertDescription>
      </Alert>

      <Alert variant={"destructive"}>
        <AlertDescription>Message</AlertDescription>
      </Alert>

      <Dialog>
        <DialogTrigger>Open dialog</DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>My dialog</DialogTitle>
            
            <DialogDescription>
              My dialog content.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <Button>
                Confirm
              </Button>
            </DialogClose>

            <DialogClose asChild>
              <Button variant="secondary">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant="outline">Open drawer</Button>
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>My drawer</DrawerTitle>
            <DrawerDescription>My drawer content.</DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>

      <Tabs defaultValue="Tab1">
        <TabsList>
          <TabsTrigger value="Tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="Tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="Tab3">Tab 3</TabsTrigger>
        </TabsList>

        <TabsContent value="Tab1">Tab 1 content.</TabsContent>
        <TabsContent value="Tab2">Tab 2 content.</TabsContent>
        <TabsContent value="Tab3">Tab 3 content.</TabsContent>        
      </Tabs>
    </div>
  );
}

export default App;
