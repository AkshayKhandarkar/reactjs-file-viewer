# ReactJS File Viewer

A powerful and flexible ReactJS component for viewing various file types. Easily integrate file viewing capabilities into your React applications.

## Features

- Supports multiple file types, including **PDF, DOCX, JPG, PNG, HEIC, MP4, MP3, and more**.
- Easy to use and integrate into existing React projects.
- Lightweight, efficient, and performant.
- Customizable UI with flexible styling options.
- Supports local and remote file URLs.
- Error handling and fallback UI support.

## Installation

You can install the package using **npm**:

```sh
npm install reactjs-file-viewer
```

Or using **yarn**:

```sh
yarn add reactjs-file-viewer
```

## Usage

Here is an example of how to use the `reactjs-file-viewer` package in your ReactJS project:

```jsx
import React from 'react';
import FileViewer from 'reactjs-file-viewer';

const App = () => {
  const file = 'path/to/your/file.pdf'; // Path to your file
  const fileType = 'pdf'; // File type

  return (
    <div>
      <h1>File Viewer</h1>
      <FileViewer file={file} fileType={fileType} />
    </div>
  );
};

export default App;
```

## Props

| Prop      | Type   | Description                                                | Required |
|-----------|--------|------------------------------------------------------------|----------|
| `file`    | string | The path or URL of the file to be viewed.                  | Yes      |
| `fileType`| string | The file type (e.g., 'pdf', 'docx', 'jpg', 'mp4', etc.).   | Yes      |
| `style`   | object | Custom styles for the viewer component.                    | No       |
| `onError` | func   | Callback function for handling errors.                     | No       |
| `onLoad`  | func   | Callback function triggered when the file loads successfully. | No       |

## Supported File Types

- **Documents**: PDF, DOCX, TXT, MD
- **Images**: JPG, PNG, GIF, HEIC, SVG
- **Videos**: MP4, WebM, AVI
- **Audio**: MP3, WAV

And more...

## Customization

You can customize the file viewer by passing additional props and styles. For example:

```jsx
<FileViewer
  file={file}
  fileType={fileType}
  style={{ width: '100%', height: '500px', border: '1px solid #ccc' }}
  onError={() => console.error('Failed to load file')}
  onLoad={() => console.log('File loaded successfully')}
/>
```

## Contributing

We welcome contributions to improve this package! If you have suggestions, find a bug, or want to add a new feature, feel free to open an issue or submit a pull request on **GitHub**.

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## Author

[Your Name](mailto:your-email@example.com)

## Keywords

- ReactJS
- File Viewer
- Document Viewer
- PDF Viewer
- DOCX Viewer
- Image Viewer
- Video Viewer
- File Display
- React Component
- File Handling

## Acknowledgements

Special thanks to all contributors and the open-source community for their support.

## Support

If you need assistance, feel free to contact the author at [your-email@example.com](mailto:your-email@example.com).

## Changelog

### 1.0.0

- Initial release with support for multiple file types.

## Links

- [GitHub Repository](https://github.com/AkshayKhandarkar/reactjs-file-viewer/tree/main)
- [NPM Package](https://www.npmjs.com/package/reactjs-file-viewer)
