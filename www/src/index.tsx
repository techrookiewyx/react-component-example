import React from 'react';
import { createRoot } from 'react-dom/client';
import '@wcj/dark-mode';
import MarkdownPreviewExample from '@uiw/react-markdown-preview-example';
import data from '@wyxin/react-component-example/README.md';

import ComponentExample from '@wyxin/react-component-example';

const Github = MarkdownPreviewExample.Github;
const Example = MarkdownPreviewExample.Example;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <MarkdownPreviewExample
    source={data.source}
    components={data.components}
    data={data.data}
    description="React component that handles csv file input and its parsing."
    title="Component Process Test"
    version={`v${VERSION}`}
  >
    <Github href="https://github.com/uiwjs/react-csv-reader" />
    <Example>
      <ComponentExample />
    </Example>
  </MarkdownPreviewExample>
);
