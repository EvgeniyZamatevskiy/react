export type ModalPropsType = {
  children: React.ReactNode;
  deactivateVisibleModal: () => void;
  isShowCloseIcon?: boolean;
  classNameModal?: string;
  classNameContent?: string;
  classNameCloseIcon?: string;
};
