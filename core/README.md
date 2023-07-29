react-component-example
===


### Example

```tsx mdx:preview
import React, { useState } from 'react';
import Example from '@wyxin/react-component-example';

export default function Demo() {
  const [value, setValue] = useState([]);
  return (
    <React.Fragment>
      <Example title="Hello" />
    </React.Fragment>
  );
}
```