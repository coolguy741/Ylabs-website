import { DecoderText } from 'components/DecoderText';
import { Section } from 'components/Section';
import { useTheme } from 'components/ThemeProvider';
import { Transition } from 'components/Transition';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import styles from './Intro.module.css';

const DisplacementSphere = dynamic(() =>
  import('pages/Home/DisplacementSphere').then(mod => mod.DisplacementSphere)
);

export function Intro({
  id,
  sectionRef,
  disciplines,
  scrollIndicatorHidden,
  description1,
  description2,
  ...rest
}) {
  const theme = useTheme();
  const titleId = `${id}-title`;

  const handleScrollClick = event => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };

  return (
    <Section
      className={styles.intro}
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <Transition in key={theme.themeId} timeout={3000}>
        {(visible, status) => (
          <Fragment>
            <DisplacementSphere />
            <header className={styles.text}>
              <div className={styles.description} data-visible={visible} id={titleId}>
                <DecoderText text={description1} delay={300} />
                <br />
                <DecoderText text={description2} delay={1200} />
              </div>
            </header>
          </Fragment>
        )}
      </Transition>
    </Section>
  );
}
