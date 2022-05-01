---
name: 'component'
description: 'Generate standard React component.'
message: 'Please enter component name.'
root: 'src/stories'
output: '**/*'
ignore: []
questions:
  name: 'モデル名を入力してください。'
---

# `{{ inputs.name | pascal }}/index.tsx`

```tsx
import React from 'react';

type Props = {};
export const {{ inputs.name | pascal }}: React.FC<Props> = ({ children }) => (
  <div>{children}</div>
);

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```tsx
import React from 'react';
import { {{ inputs.name | pascal }} } from '.';

export const generate = () => {
	return <{{ inputs.name | pascal }} />;
};

export default {
	title: "Components/{{ inputs.name | pascal }}",
};

```
