<!-- prettier-ignore-start -->
# Sidebar components

## Sidebar

This component implements splitscrean view

### Props

```typescript
interface SidebarProps {
  info?: ReactNode
  right?: boolean  
  children?: ReactNode    
}
```

- `info` - static block of text near sidebar
- `right` - side to render sidebar block, by default - **left**
- `children` - content wich will be rendered to sidebar

### Tipical usage

```JSX
<Sidebar info={<StaticContent />} right>
	<SidebarContent>
	  	This is sidebar content
	</SidebarContent>
</Sidebar>
```

### PortalSidebar

This component is like `Sidebar` the only difference is that this component build on `react-portals` so it will be mounted in separate DOM element.

### Props

```typescript
interface SidebarProps {
  right?: boolean
  children?: ReactNode
}
```

- `right` - side to render sidebar block, by default - **left**
- `children` - content wich will be rendered to sidebar

### Tipical usage

```typescript
const Underlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${getColor(["green", "greenHaze"])};
`
```

```JSX
<>
  <Underlay>Some text</Underlay>
    <PortalSidebar right>
    <SidebarContent>
      This is sidebar content
    <SidebarContent>
  </PortalSidebar>
</>
```
<!-- prettier-ignore-end -->
