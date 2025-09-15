# SWEEP.md - Project Knowledge Base

## Project Overview
This is a Next.js blog application using Nextra theme for the Sweep AI engineering blog.

## Tech Stack
- **Framework**: Next.js with App Router
- **Theme**: nextra-theme-blog
- **Styling**: Inline styles (React style objects)
- **Content**: MDX files for blog posts

## Project Structure

### Routing Structure
- Next.js App Router uses folder-based routing
- Blog posts must follow this structure:
  - Route: `/posts/[post-name]`
  - File location: `/app/posts/[post-name]/page.mdx`
  - NOT: `/app/posts/[post-name].mdx` (this won't work!)

### Key Files
- `/app/layout.jsx` - Main layout with navbar, logo, and footer
- `/app/page.mdx` - Homepage content
- `/app/posts/` - Blog posts directory
- `/app/posts/page.mdx` - Posts listing page
- `/app/posts/[post-name]/page.mdx` - Individual blog post pages

## Layout Components

### Sticky Footer Implementation
The footer uses a flexbox approach with a spacer div:
```jsx
<body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
  <Layout>...</Layout>
  <div style={{ flex: 1 }} /> {/* Spacer to push footer down */}
  <footer>...</footer>
</body>
```

### Logo Positioning
- Logo is positioned at the top of the page, outside the Layout component
- Uses sticky positioning to remain visible when scrolling
- Located in a separate div above the Layout component

### Navigation Structure
1. Logo container (sticky, top of page)
2. Navbar (inside Layout component)
3. Main content
4. Footer (pushed to bottom with flex spacer)

## Common Issues & Solutions

### Issue: Blog post links not resolving
**Solution**: Ensure MDX files are in the correct folder structure:
- Wrong: `/app/posts/my-post.mdx`
- Correct: `/app/posts/my-post/page.mdx`

### Issue: Footer not sticking to bottom
**Solution**: Use flexbox with a spacer div:
- Body: `minHeight: '100vh'`, `display: 'flex'`, `flexDirection: 'column'`
- Add spacer: `<div style={{ flex: 1 }} />`
- Footer comes after spacer

### Issue: Layout components have conflicting styles
**Solution**: Use plain HTML elements (`<footer>` instead of `<Footer>`) when the Nextra components have conflicting internal styles

## Styling Patterns

### Dark Theme Compatibility
- Use `color: 'inherit'` for text to adapt to theme
- Use `backgroundColor: 'transparent'` for overlays
- Border colors: `#e5e5e5` works well for both light/dark themes

### Responsive Design
- Use `maxWidth` with `margin: '0 auto'` for centered content
- Add padding to containers for mobile spacing

## MDX Front Matter Structure
```yaml
---
title: Post Title
date: YYYY-MM-DD
description: Brief description
tag: tag1, tag2, tag3
author: Author Name
---
```

## Build & Development Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Important Notes

1. **Nextra Theme Components**: The Layout, Navbar, and Footer components from 'nextra-theme-blog' have their own internal styling that can conflict with custom styles. Sometimes it's better to use plain HTML elements.

2. **File Naming**: In Next.js App Router, the main content file in each route folder must be named `page.mdx`, `page.tsx`, or `page.jsx`.

3. **Static Assets**: Place static files like images in the `/public` directory. Reference them with paths starting from `/` (e.g., `/banner.svg`).

4. **Sticky Positioning**: When using `position: 'sticky'`, ensure the parent container doesn't have `overflow: hidden` which would break the sticky behavior.

5. **Flex Layout Gotchas**: When using flexbox for sticky footers, ensure all parent containers participate in the flex layout properly. The Layout component from Nextra might have its own flex properties that need to be considered.

## Recent Updates
- Moved logo to top of page outside Layout component
- Implemented sticky footer using flexbox and spacer div
- Fixed blog post routing by restructuring MDX files into proper folders
- Added download button to header (links to GitHub)
- Simplified footer content

## Future Considerations
- Consider adding a table of contents for longer blog posts
- Implement proper SEO meta tags for each blog post
- Add RSS feed functionality
- Consider implementing a search feature for blog posts
- Add syntax highlighting themes that work well with both light and dark modes