import { type ReactNode } from 'react';

type HintBoxProps = {
  mode: 'hint';
  children: ReactNode;
};

type WarningBoxProps = {
  mode: 'warning';
  children: ReactNode;
  severity: 'low' | 'medium' | 'high';
  // severity: 'low' | 'medium' | 'high' | undefined;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

function InfoBox(props: InfoBoxProps) {
  // info version
  // warning version
  const { children, mode } = props;
  if (mode === 'hint')
    return (
      <aside className='infobox infobox-hint'>
        <p>{children}</p>
      </aside>
    );

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <p>Warning</p>
      <p>{children}</p>
    </aside>
  );
}

export default InfoBox;
