import React, { useState, useEffect } from "react";
import { Base64 } from "js-base64";
import mime from "mime-types";
import { saveAs } from "file-saver";
import heic2any from "heic2any";
import { FileViewerProps } from "types";

const FileViewer: React.FC<FileViewerProps> = ({
  base64,
  fileName = "file",
  renderTarget = "popup",
  containerId,
}) => {
  const [fileType, setFileType] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Detect MIME type from raw base64 data
  const detectMimeType = (base64: string): string => {
    const decodedData = Base64.atob(base64); // Use atob to decode base64 to binary string
    const mimeType = mime.lookup(decodedData);
    return mimeType || "application/octet-stream"; // Fallback MIME type
  };

  // Detect file type from base64 string
  useEffect(() => {
    const detectFileType = () => {
      try {
        const mimeType = detectMimeType(base64);
        setFileType(mime.extension(mimeType) || "bin");
      } catch (err) {
        setError("Failed to detect file type.");
      }
    };

    detectFileType();
  }, [base64]);

  // Convert HEIC/HEIF to JPEG/PNG
  const convertHeicToImage = async (blob: Blob): Promise<Blob> => {
    try {
      const result = await heic2any({
        blob,
        toType: "image/jpeg", // or 'image/png'
        quality: 0.8, // Optional: Set image quality
      });
      return Array.isArray(result) ? result[0] : result; // Handle array of blobs
    } catch (err) {
      console.error("Error converting HEIC/HEIF:", err);
      return blob; // Fallback to original blob if conversion fails
    }
  };

  // Render the file based on the renderTarget
  const renderFile = async () => {
    try {
      const decodedData = Base64.decode(base64);
      const mimeType = detectMimeType(base64);
      let blob = new Blob([decodedData], { type: mimeType });

      // Convert HEIC/HEIF to JPEG/PNG
      if (fileType === "heic" || fileType === "heif") {
        blob = await convertHeicToImage(blob);
      }

      const url = URL.createObjectURL(blob);

      switch (renderTarget) {
        case "popup":
          const popupWindow = window.open(
            url,
            "_blank",
            "width=800,height=600"
          );
          if (!popupWindow) {
            setError("Failed to open popup window.");
          }
          break;
        case "inline":
          if (containerId) {
            const container = document.getElementById(containerId);
            if (container) {
              container.innerHTML = `<iframe src="${url}" width="100%" height="100%"></iframe>`;
            } else {
              setError("Container not found.");
            }
          } else {
            setError("Container ID is required for inline rendering.");
          }
          break;
        default:
          setError("Invalid render target.");
      }
    } catch (err) {
      setError("Failed to render file.");
    }
  };

  // Download the file
  const handleDownload = async () => {
    try {
      const decodedData = Base64.decode(base64);
      const mimeType = detectMimeType(base64);
      let blob = new Blob([decodedData], { type: mimeType });

      // Convert HEIC/HEIF to JPEG/PNG
      if (fileType === "heic" || fileType === "heif") {
        blob = await convertHeicToImage(blob);
      }

      saveAs(blob, `${fileName}.${fileType}`);
    } catch (err) {
      setError("Failed to download file.");
    }
  };

  // Automatically render the file when the component mounts
  useEffect(() => {
    if (fileType) {
      renderFile();
    }
  }, [fileType]);

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {renderTarget === "inline" && !containerId && (
        <p style={{ color: "red" }}>
          Container ID is required for inline rendering.
        </p>
      )}
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default FileViewer;
