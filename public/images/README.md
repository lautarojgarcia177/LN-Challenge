# Images

Store all reusable images here. These can be accessed at `/images/filename.ext`.

## Usage in Next.js

```jsx
// In your components
import Image from 'next/image'

export function Logo() {
  return (
    <Image 
      src="/images/logo.png"
      alt="Logo"
      width={200}
      height={50}
      priority
    />
  )
}