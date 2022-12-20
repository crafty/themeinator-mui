import { useContext, useEffect, useState } from "react";
import ColorThief from "colorthief";

import UploadFileIcon from "@mui/icons-material/UploadFile";

import styled from "@mui/material/styles/styled";

import {
  convertRgbToHex,
  generateColorTokens,
} from "../../styles/utilities/color-token-generator";

import { ThemeDataContext } from "../../context/theme-options-context";

import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { useColorTokens } from "../../hooks/use-color-tokens";

const DragAndDropContainer = styled("div", {
  name: "div",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root],
})(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    color: rgba(0, 0, 0, 0.75);
    font-weight: 600;
    font-size: .9rem;
    padding: 15px;
    border-radius: 15px;
    background-color: ${theme.palette.grey[200]};
    `
);

export const FileUploader = () => {
  const [dragging, setDragging] = useState(false);
  const [generatedColorTokens, setGeneratedColorTokens] = useState({
    dark: {},
    light: {},
  });
  const [tokensName, setThemeName] = useState("generatedColorTokens");

  const { themeData, setThemeData } = useContext(ThemeDataContext);

  const { dark, light } = generatedColorTokens;

  const processFile = (file) => {
    const reader = new FileReader();
    const colorThief = new ColorThief();
    const img = new Image(500, 500);

    reader.addEventListener("load", () => {
      const uploadedImage = reader.result;

      img.crossOrigin = "Anonymous";
      img.src = uploadedImage;
    });

    reader.readAsDataURL(file);

    img.addEventListener("load", () => {
      try {
        const derivedColors = colorThief.getPalette(img, 2);

        const [primaryR, primaryG, primaryB] = derivedColors[0];
        const [secondaryR, secondaryG, secondaryB] = derivedColors[1];

        const primary = convertRgbToHex(primaryR, primaryG, primaryB);
        const secondary = convertRgbToHex(secondaryR, secondaryG, secondaryB);

        const generatedColorTokens = generateColorTokens(primary, secondary);

        setGeneratedColorTokens(generatedColorTokens);

        setThemeData({
          ...themeData,
          themeOptions: [
            ...themeData.themeOptions,
            {
              name: `${tokensName}-${themeData.themeOptions.length - 4}`,
              icon: <AutoFixHighIcon />,
            },
          ],
          tokenOptions: {
            ...themeData.tokenOptions,
            [tokensName]: generatedColorTokens,
          },
        });
      } catch (e) {
        console.log(e);
      }
    });
  };

  const onDrop = (event) => {
    event.preventDefault();

    if (event.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...event.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          processFile(file);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...event.dataTransfer.files].forEach((file, i) => {
        processFile(file);
      });
    }
  };

  useEffect(() => {
    //console.log(dragging);
  }, [dragging]);

  const darkColorLabels = Object.keys(dark);
  const lightColorLabels = Object.keys(light);

  return (
    <>
      <DragAndDropContainer
        id="dropZone"
        onDrop={(e) => onDrop(e)}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={() => setDragging(true)}
        onDragLeave={() => setDragging(false)}
      >
        <section>
          <UploadFileIcon
            color="primary"
            sx={{ display: "block", fontSize: "80px" }}
          />
        </section>
        <section>
          <span>Drag and drop or browse to choose file</span>
          {dragging && <span>Drop Here</span>}
        </section>
      </DragAndDropContainer>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "40px",
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <span>Dark Palette</span>
          {lightColorLabels.map((colorName) => {
            const colors = Object.values(light[colorName]);

            return (
              <section key={colorName}>
                <span>{colorName}</span>

                <section style={{ display: "flex", gap: "5px" }}>
                  {colors.map((color, i) => (
                    <div
                      key={i}
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: color,
                      }}
                    />
                  ))}
                </section>
              </section>
            );
          })}
        </section>

        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <span>Light Palette</span>
          {darkColorLabels.map((colorName) => {
            const colors = Object.values(dark[colorName]);

            return (
              <section key={colorName}>
                <span>{colorName}</span>

                <section style={{ display: "flex", gap: "5px" }}>
                  {colors.map((color, i) => (
                    <div
                      key={i}
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: color,
                      }}
                    />
                  ))}
                </section>
              </section>
            );
          })}
        </section>
      </div>
    </>
  );
};
