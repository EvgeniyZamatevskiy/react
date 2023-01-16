import React, { ChangeEvent, FC, useRef } from "react";
import { FilePropsType } from "./types";
import { Button } from "components";
import classes from "./index.module.scss";

const FIRST_FILES_INDEX = 0;
const MAX_FILE_SIZE = 1000000;
const ERROR_MESSAGE = "The file is too large";

export const File: FC<FilePropsType> =
  ({
     buttonClass,
     handleUpdatePhotoChange,
     handleSetErrorMessage,
     children
   }) => {

    const fileRef = useRef<HTMLInputElement>(null);

    const onSelectFileClick = (): void => fileRef && fileRef.current?.click();

    const onUploadFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
      if (event.currentTarget.files && event.currentTarget.files.length) {
        const file = event.currentTarget.files[FIRST_FILES_INDEX];

        if (file.size < MAX_FILE_SIZE) {
          handleUpdatePhotoChange(file);
        } else {
          handleSetErrorMessage(ERROR_MESSAGE);
        }
      }
    };

    return (
      <label className={classes.label}>
        <input className={classes.file} type="file" onChange={onUploadFileChange} ref={fileRef} />
        <Button className={buttonClass} onClick={onSelectFileClick}>
          {children}
        </Button>
      </label>
    );
  };
